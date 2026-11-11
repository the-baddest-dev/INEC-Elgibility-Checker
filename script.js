function check() {
  // alert('It is working')

  let birthYear = document.getElementById('input').value
  let displayArea = document.getElementById('display')  

  if (birthYear == '') {
    alert('input should not be empty')
  }

  if (birthYear.length != 4){
    displayArea.innerHTML = `<p>Invalid year of birth. Enter 4 digit</p>`
    return;
  }
  
  
  let currentYear = new Date().getFullYear()
  let age = currentYear - Number(birthYear)
  
  if (isNaN(Number(birthYear))){
    displayArea.innerHTML = `<p>Do not input text!</p>`
    return
  }

  if (age >= 18) {
    displayArea.innerHTML = `<p>You are eligible to vote</p>`
  } else if (age < 18) {
    displayArea.innerHTML = `<p>You are not eligible to vote. Come back in ${18 - age} years</p>`
  }
}
