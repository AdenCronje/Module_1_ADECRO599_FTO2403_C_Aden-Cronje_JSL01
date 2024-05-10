function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  function addSpaceEveryFourCharacters(str) {
    return str.replace(/(.{4})(.{4})(.{0})/, "$1 $2 $3");
  }

  inputWithSpaces = addSpaceEveryFourCharacters(input);

  let inputArray = inputWithSpaces.split(" ");

  // Logic for Syntax being "Valid" or "Invalid"
  if (
    inputArray[0] === "pet_" &&
    inputArray[1] > 1999 &&
    inputArray[1] <= 2024 &&
    inputArray[2].length > 0
  ) {
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
