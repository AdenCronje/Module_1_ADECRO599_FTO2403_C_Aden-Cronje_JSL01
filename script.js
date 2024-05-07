function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = "Valid"; // Placeholder for validation result

  //   if (input == "pet_") {
  //     result = "Valid Syntax";
  //     console.log(result);
  //   } else {
  //     input === null, "pet";
  //     result = "Invalid Syntax";
  //     console.log(result);
  //   }

  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters

  document.getElementById("result").innerText = result;
}
let birthYear = Math.floor(Math.random() * 2000) + 100;
console.log(birthYear);
