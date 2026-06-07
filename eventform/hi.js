const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const idNumber = document.querySelector("#idNumber");
const number = document.querySelector("#number");
const accessCode = document. querySelector("accessCode");
const code = document.querySelector("#code");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = type.value;
  if (value === 'student') {
    idNumber.hidden = false;
    accessCode.hidden = true;
    number.required = true;
    code.required = false;
  }
  else if (value === 'guest') {
    idNumber.hidden = true;
    accessCode.hidden = false;
    number.required = false;
    code.required = true;
  }
  else {
   idNumber.hidden = true;
   accessCode.hidden = true;
   number.required = false;
   code.required = false;
  }
}

type.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";


  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          