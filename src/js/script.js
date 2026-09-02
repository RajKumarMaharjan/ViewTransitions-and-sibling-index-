// ================ View Transitions API ==========================
 // *A HOF function that if supported adds a view transition wrapper around a callback function.
 // * @param {Function} fn - callback function
 // * @returns {Function} A function that starts a view transition if supported, or the original function.


function addViewTransitionWrapper (fn) {
    return (typeof document.startViewTransition === 'function')
        ? (...args) => document.startViewTransition(() => fn(...args)) : fn;
};

function updateCardsDisplayed (cards, choice) {
    for (const card of cards)
        card.classList.toggle('hide', !(choice === 'all' || card.dataset.cat === choice))
}

const cards = document.querySelectorAll('.card');
const select = document.querySelector('select#categories');
const updateCards = addViewTransitionWrapper(updateCardsDisplayed);

select.addEventListener('change', ({target}) => {
    updateCards(cards, target.value)
});