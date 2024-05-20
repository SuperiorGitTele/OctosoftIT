const fetchButton = document.getElementById("fetchButton");
const filterSelect = document.getElementById("filterSelect");
const userList = document.getElementById("userList");

async function fetchUserApi() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=40");
    const data = await response.json();

    const selectedFilter = filterSelect.value;

    
    const filteredUsers = data.results.filter(user => {
      switch (selectedFilter) {
        case "male":
          return user.gender === "male";
        case "female":
          return user.gender === "female";
        case "above30":
          return user.dob.age > 30;
        default:
          return true; 
      }
    });

    
    userList.innerHTML = "";

    
    filteredUsers.forEach(user => {
      const li = document.createElement("li");
      li.innerHTML = `Name: ${user.name.title} ${user.name.first} ${user.name.last}, Age: ${user.dob.age}, <br><img src="${user.picture.medium}" alt="${user.name.first}">`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.log("Error Detected:", error);
  }
}

fetchButton.addEventListener("click", fetchUserApi);
filterSelect.addEventListener("change", fetchUserApi);
