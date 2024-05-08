function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result
  let petBirthYear = "2015";
  // console.log(petBirthYear);
  let petName = "Forrest";
  let petInfo = ["pet_", "2015", "Forrest"];
  let adoptPet = petInfo.slice(0, 2);

  if (input == adoptPet) {
    result = "Valid Syntax";
    console.log(result);
  } else {
    result = "Invalid Syntax";
    console.log(result);
  }

  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  document.getElementById("result").innerText = result;
}
// let birthYear = Math.floor(Math.random() * 2000) + 100;
// console.log(birthYear);
