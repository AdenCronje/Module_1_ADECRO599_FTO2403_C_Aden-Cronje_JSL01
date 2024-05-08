function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result
  let petBirthYear = "2015";
  let petName = "Forrest";
  let petInfo = ["pet_", "2015", "Forrest"];
  let adoptPet = petInfo.join("");
  // console.log(adoptPet);
  // console.log(adoptPet);
  // console.log(input);
  // console.log(typeof adoptPet);
  // console.log(typeof input);

  // Logic for Syntax being "Valid" or "Invalid"
  if (input == adoptPet && petBirthYear >= 2024 && x <= 1999 && petName) {
    result = "Valid Syntax";
    console.log(result);
  } else {
    result = "Invalid Syntax";
    console.log(result);
  }

  // function yearRanges(x, y) {
  //   if (x >= 0 && x <= 0) {
  //   }
  // }

  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  document.getElementById("result").innerText = result;
}
