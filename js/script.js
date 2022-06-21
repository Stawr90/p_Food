window.addEventListener('DOMContentLoaded', function() {
    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', event => {
        const target = event.target;
        if (target && target.matches('div.tabheader__item')) {
            tabs.forEach((item,i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    const boxwrap = document.querySelector('.wrapper__box'),
        box = boxwrap.querySelector('.box');
        let pos = 1;
    
    function myAnimation() {
        if (pos == 1) {
            const idPlus = setInterval(goBox, 10);
            
            function goBox() {
                if (pos === 92) {
                    clearInterval(idPlus);
                } else {
                    pos++;
                    box.style.left = pos + '%';
                }  
            }
        } else {
            const idMinus = setInterval(prevBox, 10);

            function prevBox() {
                if (pos == 1) {
                    clearInterval(idMinus);
                } else {
                    pos--;
                    box.style.left = pos + '%';
                }  
            }
        }
    }
    
    box.addEventListener('click', myAnimation);

});