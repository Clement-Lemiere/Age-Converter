const birthdayForm = document.querySelector('#birthday-form');
const daySelect = birthdayForm.querySelector('#day');
const monthSelect = birthdayForm.querySelector('#month');
const yearSelect = birthdayForm.querySelector('#year');
const resultDiv = document.querySelector('#result');

// populate day select with options
for (let i = 1; i <= 31; i++) {
  const option = document.createElement('option');
  option.textContent = i;
  daySelect.appendChild(option);
}

// populate month select with options
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
for (let i = 0; i < months.length; i++) {
  const option = document.createElement('option');
  option.textContent = months[i];
  monthSelect.appendChild(option);
}

// populate year select with options
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 100; i--) {
  const option = document.createElement('option');
  option.textContent = i;
  yearSelect.appendChild(option);
}

// handle form submission
birthdayForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const day = daySelect.value;
    const month = monthSelect.value;
    const year = yearSelect.value;
    console.log(`Selected date of birth: ${day} ${month} ${year}`);
    // calculate age in days
    const birthDate = new Date(year, months.indexOf(month), day);
    const ageInDays = Math.floor((Date.now() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
    // display result
    resultDiv.textContent = `Your age is ${ageInDays} days.`;
    resultDiv.style.display = 'flex';
    document.body.appendChild(resultDiv);
});

  


