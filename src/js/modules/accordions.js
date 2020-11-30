const accordionContainer = document.querySelector('.questions');
const allAccordionLinks = Array.from( accordionContainer.querySelectorAll('.question') );
const allAccordionContent = Array.from( accordionContainer.querySelectorAll('.answer') );


allAccordionLinks.forEach(link => {
    link.addEventListener( 'click', toggleAccordion )
});

function closeAllAccordions() {
    allAccordionLinks.forEach(link => {
        link.setAttribute( 'aria-selected', false )
    });

    allAccordionContent.forEach(content => {
        content.setAttribute( 'aria-expanded', false )
    });
}

function toggleAccordion(event) {
    let button = event.target;
    let content = event.target.nextElementSibling;
    (button.getAttribute( 'aria-selected') === 'false')
        ? button.setAttribute( 'aria-selected', true )
        : button.setAttribute( 'aria-selected', false );
    (content.getAttribute( 'aria-expanded') === 'false')
        ? content.setAttribute( 'aria-expanded', true )
        : content.setAttribute( 'aria-expanded', false );

}

closeAllAccordions();