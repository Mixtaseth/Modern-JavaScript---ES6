// GLOBAL SELECTORS
const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');

// --COUNTER COMPONENT--

const inputHandler = () => {
  //determine the max number of character
  const maxNrChars = 150;
  //determine the number of characters currently typed
  const nrCharsTyped = textareaEl.value.length;
  //calculate the number of characters left (maximum - typed)
  const charsLeft = maxNrChars - nrCharsTyped;
  //show number of characters left
  counterEl.textContent = charsLeft;
};

textareaEl.addEventListener('input', inputHandler);

// SUBMIT COMPONENT

const submitHandler = (event) => {
  // To prevent default browser action
  event.preventDefault();
  // Get text from textarea
  const text = textareaEl.value;
  // validate text
  if (text.includes('#') && text.length >= 5) {
    // show valid indicator
    formEl.classList.add('form--valid');

    //remove visual indicator
    setTimeout(() => {
      formEl.classList.remove('form--valid');
    }, 2000);
  } else {
    //show invalid indicator
    formEl.classList.add('form--invalid');

    //remove invalid indicator
    setTimeout(() => {
      formEl.classList.remove('form--invalid');
    }, 2000);
    // focus textarea
    textareaEl.focus();
    //stop this function executing
    return;
  }

  //we have the text so we need to extract other info from the text
  const hashtag = text.split(' ').find((word) => word.includes('#'));
  // const company;
  // const badgeLetter;
  // const upvoteCount = 0;
  // const daysAgo = 0;
};

formEl.addEventListener('submit', submitHandler);
