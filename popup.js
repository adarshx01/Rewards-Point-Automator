document.getElementById('start-searches').addEventListener('click', () => {
    const delayInput = document.getElementById('delay-input').value;
    const searchCountInput = document.getElementById('search-count-input').value;
    const delay = parseInt(delayInput, 10) * 1000; // Convert seconds to milliseconds
    const searchCount = parseInt(searchCountInput, 10);
  
    chrome.runtime.sendMessage({ action: 'startSearches', delay: delay, searchCount: searchCount }, (response) => {
      console.log(response.status);
    });
  });
  