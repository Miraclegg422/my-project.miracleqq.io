// script.js

document.addEventListener('DOMContentLoaded', function() {
    const carGrid = document.getElementById('car-grid');
    const brandFilterSelect = document.getElementById('brand-filter');
    const applyFiltersButton = document.getElementById('apply-filters');

    const cars = [
        {
            model: "Camry",
            brand: "Toyota",
            price: 2500000,
            color: "Серебристый",
            condition: "С пробегом",
            bodyType: "Седан",
            image: "camry.jpg",
            year: 2018,
            mileage: 85000,
            engine: "2.5L 4-цилиндровый",
            transmission: "Автомат",
            fuelType: "Бензин"
        },
        {
            model: "X5",
            brand: "BMW",
            price: 7500000,
            color: "Черный",
            condition: "Новый",
            bodyType: "Кроссовер",
            image: "x5.jpg",
            year: 2023,
            mileage: 0,
            engine: "3.0L 6-цилиндровый",
            transmission: "Автомат",
            fuelType: "Бензин"
        },
        {
            model: "MX-5",
            brand: "Mazda",
            price: 3200000,
            color: "Красный",
            condition: "С пробегом",
            bodyType: "Кабриолет",
            image: "mx5.jpg",
            year: 2016,
            mileage: 62000,
            engine: "2.0L 4-цилиндровый",
            transmission: "Механика",
            fuelType: "Бензин"
        },
        {
            model: "A4",
            brand: "Audi",
            price: 3800000,
            color: "Белый",
            condition: "Новый",
            bodyType: "Седан",
            image: "audi-a4.jpg",
            year: 2024,
            mileage: 500,
            engine: "2.0L 4-цилиндровый",
            transmission: "Автомат",
            fuelType: "Бензин"
        },
        {
            model: "Rio",
            brand: "Kia",
            price: 1500000,
            color: "Синий",
            condition: "С пробегом",
            bodyType: "Седан",
            image: "kia-rio.jpg",
            year: 2015,
            mileage: 120000,
            engine: "1.6L 4-цилиндровый",
            transmission: "Автомат",
            fuelType: "Бензин"
        },
        {
            model: "Polo",
            brand: "Volkswagen",
            price: 1800000,
            color: "Серый",
            condition: "С пробегом",
            bodyType: "Хэтчбек",
            image: "polo.jpg",
            year: 2017,
            mileage: 95000,
            engine: "1.4L 4-цилиндровый",
            transmission: "Механика",
            fuelType: "Бензин"
        },
        {
            model: "Model 3",
            brand: "Tesla",
            price: 6500000,
            color: "Белый",
            condition: "Новый",
            bodyType: "Седан",
            image: "model3.jpg",
            year: 2023,
            mileage: 1000,
            engine: "Электрический",
            transmission: "Автомат",
            fuelType: "Электричество"
        },
        {
            model: "CR-V",
            brand: "Honda",
            price: 4200000,
            color: "Черный",
            condition: "С пробегом",
            bodyType: "Кроссовер",
            image: "crv.jpg",
            year: 2019,
            mileage: 78000,
            engine: "2.4L 4-цилиндровый",
            transmission: "Автомат",
            fuelType: "Бензин"
        },
        {
            model: "Focus",
            brand: "Ford",
            price: 1900000,
            color: "Красный",
            condition: "С пробегом",
            bodyType: "Хэтчбек",
            image: "focus.jpg",
            year: 2016,
            mileage: 110000,
            engine: "1.6L 4-цилиндровый",
            transmission: "Механика",
            fuelType: "Бензин"
        },
        {
            model: "E-Class",
            brand: "Mercedes-Benz",
            price: 8800000,
            color: "Серебристый",
            condition: "Новый",
            bodyType: "Седан",
            image: "eclass.jpg",
            year: 2024,
            mileage: 0,
            engine: "2.0L 4-цилиндровый",
            transmission: "Автомат",
            fuelType: "Бензин"
        }
    ];


    function renderCars(carsToRender) {
        carGrid.innerHTML = '';

        carsToRender.forEach(car => {
            const carCard = document.createElement('div');
            carCard.classList.add('car-card');

            carCard.innerHTML = `
                <img src="toyota.png" alt="Изображение ${car.model}" class="car-image">
                <div class="car-details">
                    <h3 class="car-model">${car.model}</h3>
                    <p class="car-brand">Марка: <span>${car.brand}</span></p>
                    <p class="car-price">Цена: <span>${car.price.toLocaleString()} ₽</span></p>
                    <p class="car-color">Цвет: <span>${car.color}</span></p>
                    <p class="car-condition">Состояние: <span>${car.condition}</span></p>
                    <p class="car-body-type">Тип кузова: <span>${car.bodyType}</span></p>
                </div>
            `;

            carGrid.appendChild(carCard);
        });
    }

    function populateBrandFilter() {
        const brands = [...new Set(cars.map(car => car.brand))];
        brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilterSelect.appendChild(option);
        });
    }

    function filterCars() {
        const selectedBrand = brandFilterSelect.value;
        const selectedBodyType = document.getElementById('body-type-filter').value;
        const selectedCondition = document.getElementById('condition-filter').value;
        const minPrice = parseInt(document.getElementById('price-min-filter').value) || null; // Преобразуем в число или null
        const maxPrice = parseInt(document.getElementById('price-max-filter').value) || null;
        const minYear = parseInt(document.getElementById('year-min-filter').value) || null;
        const maxYear = parseInt(document.getElementById('year-max-filter').value) || null;

        let filteredCars = cars.filter(car => {
            if (selectedBrand && car.brand !== selectedBrand) return false;
            if (selectedBodyType && car.bodyType !== selectedBodyType) return false;
            if (selectedCondition && car.condition !== selectedCondition) return false;
            if (minPrice !== null && car.price < minPrice) return false;
            if (maxPrice !== null && car.price > maxPrice) return false;
            if (minYear !== null && car.year < minYear) return false;
            if (maxYear !== null && car.year > maxYear) return false;

            return true;
        });

        renderCars(filteredCars);
    }

    // Инициализация
    populateBrandFilter();
    renderCars(cars);

    // Обработчик события для кнопки "Применить"
    applyFiltersButton.addEventListener('click', filterCars);
});