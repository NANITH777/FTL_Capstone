// //prediction section
// function openTab(event, tabName) {
//     const tabContents = document.querySelectorAll(".tab-content");
//     const tabButtons = document.querySelectorAll(".tab-btn");
  
//     tabContents.forEach(content => content.classList.remove("active"));
//     tabButtons.forEach(btn => btn.classList.remove("active"));
  
//     document.getElementById(tabName).classList.add("active");
//     event.currentTarget.classList.add("active");
//   }
  
//   // Add event listeners to handle form submission
//   document.getElementById('cropYieldForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Predicting Crop Yield...');
//   });
  
//   document.getElementById('climateChangeForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Predicting Climate Change Impact...');
//   });
  
//   document.getElementById('undernourishmentForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Predicting Undernourishment...');
//   });