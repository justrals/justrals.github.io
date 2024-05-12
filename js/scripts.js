// Add an event listener for the button click
document.getElementById("copyButton").addEventListener("click", function() {
    // Text to be copied
    var textToCopy = "123";

    // Create a temporary input element
    var tempInput = document.createElement("input");

    // Assign the text to the input value
    tempInput.value = textToCopy;

    // Append the input to the body
    document.body.appendChild(tempInput);

    // Select the input value
    tempInput.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary input
    document.body.removeChild(tempInput);

    // Alert the user
    alert("Text copied to clipboard: " + textToCopy);
});
