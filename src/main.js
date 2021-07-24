// Init Github
const data1= new Data;
// Init UI
const ui = new UI;

// Search input
const form = document.getElementById('get');
const stateValue = document.getElementById('market-state');
const searchMarket= document.getElementById('search-market');


// Search input event listener
form.addEventListener('click', (e) => {
  // Get input text
  const userText = stateValue.value.slice(0,1).toUpperCase().concat(stateValue.value.slice(1).toLowerCase());
  console.log(userText);

  if(userText !== ''){
   // Make http call
   data1.getMarket(userText)
    .then(data => {
      if(!data) {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        console.log(data)
        //ui.showProfile(data.profile);
        //ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    ui.clearProfile();
  }
  e.preventDefault();

}); 