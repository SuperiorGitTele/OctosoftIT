const fetchButton = document.getElementById("fetchButton");
const filterSelect = document.getElementById("filterSelect");
const userList = document.getElementById("userList");

async function fetchUserApi() {
  try {
    const response = await fetch("obj.json");
    const data = await response.json();
    // console.log(data[1]);

    userList.innerHTML = "";

    // console.log(await fetchUserApi('https://randomuser.me/api/?results=40'));
    for (const data4 of data) {
      // console.log(data4);
      const selectedFilter = filterSelect.value;
      let filteredData;

      switch (selectedFilter) {
        case "male":
          if (data4.gender === "male") {
            filteredData = `Name: ${data4.name.title} ${data4.name.first} ${data4.name.last} <br> Age: ${data4.dob.age} <br> <img src="${data4.picture.medium}" alt="${data4.name.first}">`;
          }
          break;

        case "female":
          if (data4.gender === "female") {
            filteredData = `Name: ${data4.name.title} ${data4.name.first} ${data4.name.last} <br> Age: ${data4.dob.age} <br> <img src="${data4.picture.medium}" alt="${data4.name.first}">`;
          }
          break;

        case "above30":
          if (data4.dob.age > 30) {
            filteredData = `Name: ${data4.name.title} ${data4.name.first} ${data4.name.last} <br> Age: ${data4.dob.age} <br> <img src="${data4.picture.medium}" alt="${data4.name.first}">`;
          }
          break;

        default:
          filteredData = `Name: ${data4.name.title} ${data4.name.first} ${data4.name.last} <br> Age: ${data4.dob.age} <br> <img src="${data4.picture.medium}" alt="${data4.name.first}">`;
      }

      const li = document.createElement("li");
      li.innerHTML = filteredData;

      userList.appendChild(li);
    }

    return data;
  } catch (error) {
    console.log("Error Detected:", error);
  }
}

// console.log(filterUsers());
fetchButton.addEventListener("click", fetchUserApi);
filterSelect.addEventListener("change", fetchUserApi);
