function check() {
  // alert('It is working')

  let birthYear = document.getElementById('input').value
  let displayArea = document.getElementById('display')

  if (birthYear == '') {
    alert('input should not be empty')
  }

  let currentYear = new Date().getFullYear()
  let age = currentYear - Number(birthYear)

  if (age >= 18) {
    displayArea.innerHTML = `<p>You are eligible to vote</p>`
  } else if (age < 18) {
    displayArea.innerHTML = `<p>You are not eligible to vote. Come back in ${18 - age} years</p>`
  }
}