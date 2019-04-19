const faq = {
  qas: [
    {
      question: 'x What flavor of ice cream do you sell?',
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
  text: ''
};

function search(userWritten) {
  const words = userWritten.split(' ');
  const faqs = faq.qas;

  faqs.forEach((faq) => { // entra 3 veces
    console.log('faqs!');

    words.forEach((word) => { // por cada vez del primer forEach lee las posiciones de su array.
      console.log('words!');
      if (faq.question.toLowerCase().includes(word) || faq.answer.toLowerCase().includes(word)) {
        console.log('yes -->', faq.question);
      }
    });
  });
}

search('x z');
