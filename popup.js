document.addEventListener('DOMContentLoaded', function() {
    const displayButton = document.getElementById('displayButton');
    const inputString = document.getElementById('inputString');
    const outputDiv = document.getElementById('outputDiv');
  
    displayButton.addEventListener('click', function() {
      const inputValue = inputString.value;
      outputDiv.textContent = `Your string: ${inputValue}`;
    });
  });
  