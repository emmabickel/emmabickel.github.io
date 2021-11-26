const tabs = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelector('[data-tab-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContents => { tabContents.classList.remove('active') })

        target.classList.add('active')
    })
})