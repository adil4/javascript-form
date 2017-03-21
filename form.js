
var arr = [];

function todoapp(){
   var name = document.getElementById("name").value;
   var lastName = document.getElementById("lastName").value;
   var fatherName = document.getElementById("fatherName").value;
   var email = document.getElementById("email").value;
   var Number = document.getElementById("num").value;
   var Address = document.getElementById("address").value;

    document.getElementById("name").value='';
    document.getElementById("lastName").value='';
    document.getElementById("fatherName").value='';
    document.getElementById("email").value='';
    document.getElementById("num").value='';
    document.getElementById("address").value='';


   var obj = { Name: name,lastName: lastName,faherName: fatherName, Email: email, Mobile: num,Address:Address };

    if(name == "" ||lastName == "" ||fatherName == "" ||email == "" ||num == "" || Address == ""){
        alert(" All Field is required");
        return "Field is required";
    }

arr.push(obj);
    console.log(arr);

    var tabelSave =document.getElementById("tabel");
    var row = tabelSave.insertRow();
    console.log(row);

    var NameCell = row.insertCell(0);
    var lastNameCell = row.insertCell(1);
    var fatherNameCell = row.insertCell(2);
    var emailCell = row.insertCell(3);
    var numberCell = row.insertCell(4);
    var addressCell = row.insertCell(5);


    NameCell.innerHTML = name;
    lastNameCell.innerHTML = lastName;
    fatherNameCell.innerHTML = fatherName;
    emailCell.innerHTML = email;
    numberCell.innerHTML = Number;
    addressCell.innerHTML = Address;
}