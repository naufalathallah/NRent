//car
const carId = document.getElementById('carId');
const nameCar = document.getElementById('nameCar');
const priceCar = document.getElementById('priceCar');
const addCar = document.getElementById('addCar');

const database = firebase.database();
const rootRef = database.ref('car');
const rootRef2 = database.ref('gallery');

addCar.addEventListener('click', (e) => {
    e.preventDefault();
    const autoId = rootRef.push().key
    rootRef.child(autoId).set({
        car_name: nameCar.value,
        car_price: priceCar.value
    });
    alert("Success")
    window.location.href = "car.html";
});