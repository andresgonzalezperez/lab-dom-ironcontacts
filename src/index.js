// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// Add delete button listener for example row
exampleRow.querySelector(".btn-delete").addEventListener("click", () => {
  exampleRow.remove();
});

// Change the color of the like button for example row
exampleRow.querySelector(".btn-like").addEventListener("click", (event) => {
  const btn = event.currentTarget;
  btn.classList.toggle("selected");
});



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(oneContact => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${oneContact.pictureUrl}" />
    </td>
    <td>${oneContact.name}</td>
    <td>${oneContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(newRow);

  // ITERATION 2 - Delete Buttons
  newRow.querySelector(".btn-delete").addEventListener("click", () => {
    newRow.remove();
  });

  // ITERATION 3 - Like Buttons

  newRow.querySelector(".btn-like").addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("selected");
  });
});

  // Bonus: ITERATION 4 - Add Random Contacts

  buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;

  tableBody.appendChild(newRow);

  newRow.querySelector(".btn-delete").addEventListener("click", () => {
    newRow.remove();
  });

  newRow.querySelector(".btn-like").addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("selected");
  });
});
  




  
  

  
  



