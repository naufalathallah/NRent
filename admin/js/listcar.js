var tblCar = document.getElementById('car-list');
var databaseRef = firebase.database().ref('car');
var rowIndex = 1;

databaseRef.on('value',function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        // var btnEdit = document.createElement("BUTTON");
        // btnEdit.innerHTML = "Edit";
        // btnEdit.style.backgroundColor = "#008CBA";

        var btnDelete = document.createElement("BUTTON");
        btnDelete.innerHTML = "Delete";
        btnDelete.style.backgroundColor = "#f44336";

        var row = tblCar.insertRow(rowIndex);
        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        var cellAction = row.insertCell(3);
        cellId.appendChild(document.createTextNode(childKey));
        cellName.appendChild(document.createTextNode(childData.car_name));
        cellPrice.appendChild(document.createTextNode("Rp "+ childData.car_price));
        // cellAction.appendChild(btnEdit);
        cellAction.appendChild(btnDelete);

        rowIndex = rowIndex + 1;

        //delete data
        btnDelete.addEventListener('click', (e) => {
            e.stopPropagation();
            apus(childKey);
            location.reload();
            alert("Success")
        })
    });
});

function apus(childKey) {
    firebase.database().ref(`car/${childKey}`).remove();
}


function editCar() {
    var carId = document.getElementById('carId').value;
    var carName = document.getElementById('nameCar');
    var carPrice = document.getElementById('priceCar');

    console.log(carId);
    var data = {
        car_name: carName.value,
        car_price: carPrice.value
    }

    var updates = {};
    updates['car/' + carId] = data;
    firebase.database().ref().update(updates);
    alert('updated');
    location.reload();
}