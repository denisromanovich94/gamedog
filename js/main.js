// Каталог меню
const catalogButton = document.getElementById("catalog-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const catalogOverlay = document.querySelector(".overlay-catalog");

// Открытие/закрытие каталога
if (catalogButton && dropdownMenu && catalogOverlay) {
    catalogButton.addEventListener("click", () => {
        const isMenuVisible = dropdownMenu.classList.contains("show");

        if (isMenuVisible) {
            dropdownMenu.classList.remove("show");
            catalogOverlay.classList.remove("active");
        } else {
            dropdownMenu.classList.add("show");
            catalogOverlay.classList.add("active");
        }
    });

    catalogOverlay.addEventListener("click", () => {
        dropdownMenu.classList.remove("show");
        catalogOverlay.classList.remove("active");
    });
}

// Бургер меню
const burgerButton = document.getElementById("burger-toggle");
const burgerLines = document.querySelectorAll(".burger-menu__line");
const mobileMenu = document.getElementById("mobile-menu");

// Открытие/закрытие бургер-меню
if (burgerButton && burgerLines && mobileMenu) {
    burgerButton.addEventListener("click", () => {
        const isMenuVisible = mobileMenu.classList.contains("show");

        if (isMenuVisible) {
            mobileMenu.classList.remove("show");
            burgerLines.forEach(line => line.classList.remove("active"));
        } else {
            mobileMenu.classList.add("show");
            burgerLines.forEach(line => line.classList.add("active"));
        }
    });
}






// СЛАЙДЕРЫ НА ГЛАВНОЙ СТРАНИЦЕ
document.addEventListener('DOMContentLoaded', () => {
    const swipers = document.querySelectorAll('.swiper-container');
    swipers.forEach((swiperContainer) => {
        new Swiper(swiperContainer, {
            slidesPerView: 1.75, // Количество видимых слайдов по умолчанию
            spaceBetween: 0, // Убираем отступы
            navigation: {
                nextEl: swiperContainer.querySelector('.swiper-button-next'),
                prevEl: swiperContainer.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                497: {
                    slidesPerView: 2, // Количество видимых слайдов при ширине экрана от 1129px и больше
                },
                679: {
                    slidesPerView: 2.5, // Количество видимых слайдов при ширине экрана от 1129px и больше
                },
                826: {
                    slidesPerView: 3, // Количество видимых слайдов при ширине экрана от 1129px и больше
                },
                979: {
                    slidesPerView: 3.5, // Количество видимых слайдов при ширине экрана от 1129px и больше
                },
                1129: {
                    slidesPerView: 4, // Количество видимых слайдов при ширине экрана от 1129px и больше
                },
                1352: {
                    slidesPerView: 5, // Количество видимых слайдов при ширине экрана от 1352px и больше
                },
            },
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hero__swiper-button');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Если не нужно отправлять форму

            // Снимаем класс со всех кнопок
            buttons.forEach((item) => {
                item.classList.remove('hero__swiper-button-active');
            });

            // Добавляем класс только на кликнутую кнопку
            button.classList.add('hero__swiper-button-active');
        });
    });
});



// АДАПТИВНЫЙ СЛАЙДЕР СИНГЛ ПРОДУКТ
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.mini-slider__track');
    const slides = document.querySelectorAll('.mini-slider__item');
    const navItems = document.querySelectorAll('.nav-item');
    let currentIndex = 0;

    function updateSlider() {
        const viewportWidth = document.querySelector('.mini-slider__viewport').clientWidth;

        // Перемещаем слайдер
        track.style.transform = `translateX(-${currentIndex * viewportWidth}px)`;

        // Обновляем активный элемент навигации
        navItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function goToNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Возврат к первому слайду
        }
        updateSlider();
    }

    function goToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Переход к последнему слайду
        }
        updateSlider();
    }

    // Добавляем поддержку свайпов
    let startX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 50) {
            goToNextSlide();
            isDragging = false;
        } else if (diffX < -50) {
            goToPrevSlide();
            isDragging = false;
        }
    });

    track.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Обновляем слайдер при изменении размера окна
    window.addEventListener('resize', updateSlider);

    // Добавляем функционал для кликов по навигации
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Инициализация
    updateSlider();
});
