const phoneNumberInput = document.getElementById("phone-number");
const identifyButton = document.getElementById("identify-button");
const resultElement = document.getElementById("result");
const searchingAnimation = document.querySelector(".searching-animation");

identifyButton.addEventListener("click", () => {
  const phoneNumber = phoneNumberInput.value;
  if (phoneNumber) {
    searchingAnimation.classList.add("active");
    setTimeout(() => {
      const carrier = identifyCarrier(phoneNumber);
      if (carrier) {
        resultElement.innerHTML = `The carrier of this number is <img src="${carrier.logo}" alt="${carrier.name}"> ${carrier.name}`;
      } else {
        resultElement.innerHTML = "Invalid phone number or Carrier not found";
      }
      searchingAnimation.classList.remove("active");
    }, 3000); // 3 second delay
  }
});

function identifyCarrier(phoneNumber) {
  const carriers = [
    {
      name: "MTN",
      logo: "mtn.png",
      prefixes: [
        "0803",
        "0806",
        "0703",
        "0706",
        "0903",
        "0906",
        "0813",
        "0816",
        "0913",
        "0916",
      ],
    },
    {
      name: "Glo",
      logo: "glo.jpg",
      prefixes: ["0805", "0705", "0905", "0815", "0915"],
    },
    {
      name: "Airtel",
      logo: "airtel.png",
      prefixes: [
        "0802",
        "0701",
        "0708",
        "0902",
        "0912",
        "0808",
        "0812",
        "0901",
        "0911",
      ],
    },
  ];

  for (const carrier of carriers) {
    for (const prefix of carrier.prefixes) {
      if (phoneNumber.startsWith(prefix)) {
        return carrier;
      }
    }
  }

  return null;
}

phoneNumberInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    identifyButton.click();
  }
});
