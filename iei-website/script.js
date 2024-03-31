const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
    const isOpen =dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa fa-xmark'
    : 'fa fa-bars'
}

///////////////////////nav btn for events /////////////////////////////////////////////
const ourEventsContainers = [...document.querySelectorAll('.events-upcoming')];
const eventsNxtBtn = [...document.querySelectorAll('.events-nxt-btn')];
const eventsPreBtn = [...document.querySelectorAll('.events-pre-btn')];

ourEventsContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    eventsNxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    eventsPreBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})