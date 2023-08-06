document.addEventListener('DOMContentLoaded', function() {
    const displayButton = document.getElementById('displayButton');
    const inputString = document.getElementById('inputString');
    const outputPthh = document.getElementById('outputPthh');
  
    displayButton.addEventListener('click', function() {
      const inputValue = inputString.value;
      const result = pthh(inputValue)['text'];
      console.log(result);
      outputPthh.textContent = result;
    });
  });
  