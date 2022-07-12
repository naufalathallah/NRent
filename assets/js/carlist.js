var tblCar = document.getElementById('car-list');
var databaseRef = firebase.database().ref('car');
var rowIndex = 1;

databaseRef.on('value',function(snapshot){
    snapshot.forEach(function(childSnapshot){
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        var row = tblCar.insertRow(rowIndex);
        var cellName = row.insertCell(0);
        var cellPrice = row.insertCell(1);
        cellName.appendChild(document.createTextNode(childData.car_name));
        cellPrice.appendChild(document.createTextNode("Rp "+ childData.car_price + "/day"));

        rowIndex = rowIndex + 1;

    });
});