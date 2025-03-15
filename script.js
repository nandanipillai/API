fetch("http://localhost:3000/")
  .then(response => response.text()) // Convert response to text
  .then(data => {
    console.log("Backend Response:", data); // Log response in browser console
    document.getElementById("output").innerText = data; // Display response
  })
  .catch(error => console.error("Error fetching data:", error));
