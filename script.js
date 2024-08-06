function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allItems = document.querySelectorAll('.faq-item');

    allAnswers.forEach((ans, index) => {
        if (ans !== answer) {
            ans.style.display = 'none';
            allItems[index].classList.remove('active');
        }
    });

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        element.parentNode.classList.remove('active');
    } else {
        answer.style.display = 'block';
        element.parentNode.classList.add('active');
    }
}
