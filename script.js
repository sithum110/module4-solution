var names = ["John", "Jane", "Jim", "Alice", "Bob"];

// Loop over the array
for (var i = 0; i < names.length; i++) {
  // Get the current name
  var name = names[i];

  // Convert the first letter to lowercase for case-insensitive comparison
  var firstLetter = name.charAt(0).toLowerCase();

  // Check if the first letter is 'j' or not
  if (firstLetter === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
