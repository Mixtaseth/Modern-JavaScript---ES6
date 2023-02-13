// GLOBAL SELECTORS
const MAX_CHARS = 150;

const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedbackListEl = document.querySelector('.feedbacks');
const submitBtnEl = document.querySelector('.submit-btn');

// --COUNTER COMPONENT--

const inputHandler = () => {
  //determine the max number of character
  const maxNrChars = MAX_CHARS;
  //determine the number of characters currently typed
  const nrCharsTyped = textareaEl.value.length;
  //calculate the number of characters left (maximum - typed)
  const charsLeft = maxNrChars - nrCharsTyped;
  //show number of characters left
  counterEl.textContent = charsLeft;
};

textareaEl.addEventListener('input', inputHandler);

// FORM COMPONENT

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
  const company = hashtag.substring(1);
  const badgeLetter = company.substring(0, 1).toUpperCase();
  const upvoteCount = 0;
  const daysAgo = 0;

  // new feedback Item HTML
  const feedbackItemHTML = `
    <li class="feedback">
      <button class="upvote">
          <i class="fa-solid fa-caret-up upvote__icon"></i>
          <span class="upvote__count">${upvoteCount}</span>
      </button>
      <section class="feedback__badge">
          <p class="feedback__letter">${badgeLetter}</p>
      </section>
      <div class="feedback__content">
          <p class="feedback__company">${company}</p>
          <p class="feedback__text">${text}</p>
      </div>
      <p class="feedback__date">${daysAgo === 0 ? 'NEW' : `${daysAgo}d`}</p>
    </li>
  `;

  // insert new feedbacks in list
  feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHTML);

  // clear text area
  textareaEl.value = ' ';
  // blur the submit button
  submitBtnEl.blur();
  // reset counter
  counterEl.textContent = MAX_CHARS;
};

formEl.addEventListener('submit', submitHandler);
