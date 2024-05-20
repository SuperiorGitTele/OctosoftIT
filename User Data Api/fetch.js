const fetchButton = document.getElementById("fetchButton");
const filterSelect = document.getElementById("filterSelect");
const userList = document.getElementById("userList");

fetch('obj.json')
    .then(response => response.json())
    .then(json => console.log(json))
    