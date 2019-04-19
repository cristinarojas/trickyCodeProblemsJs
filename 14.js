/*
A bussiness might have a FAQ section that we'd like to search.
Imagine a scenario where have a
list of questions and answers, and when a user types
into a text box, we return a list
of questions and answers that match,
where each word in the input text must be present
in either the question or answer for it to be returned.
In the case of an empty text, return all FAQS.
*/

const faq = {
  qas: [
    {
      question: 'What flavor of ice cream do you sell?',
      answer: 'Well sell chocolate, vanilla, and strawberry.',
      index: 0
    },
    {
      question: 'What is your bestselling ice cream?',
      answer: 'Well sell chocolate, vanilla, and strawberry.',
      index: 1
    },
    {
      question: 'wich is your name?',
      answer: 'my name is cristina?',
      index: 2
    }
  ],
  text: 'vanilla'
};

/*
  Input could be a single word, or multiple words separated by space.
  Case of words, or order of words shot nor matter.
  All words in the supplied text should appear somewhere in the question
  or answer.
*/

var result = []; // to save the result.

function searchInFaq(userWritten) {
  const faqs = faq.qas; // data
  let counter = 0;

  faqs.forEach((faq) => {
    let words = userWritten.split(' ');

    if (faqs && faqs.length > 0) {
      console.log('faqs---->', faqs);

      if (words.length > 0) {
        console.log('words--->', words);
        words.forEach((word) => {
          if (faq.question.toLowerCase().includes(word) || faq.answer.toLowerCase().includes(word)) {
            counter ++;
            console.log('counter--->', counter);
          }
        });

        if (counter === words.length) {
          result.push(faq.question.index);
        }
      } else if (faq.question.toLowerCase().includes(userWritten) || faq.answer.toLowerCase().includes(userWritten)) {
        result.push(faq.index);
      } else if (userWritten === '') {
        result.push(question.index);
      }
    } else {
      result = '';
    }

    return result;
  });
}

searchInFaq('what is');
