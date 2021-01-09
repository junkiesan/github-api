// Get the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm');

// listen for submissions on gitHub username input form
gitHubForm.addEventListener('submit', (e) => {

  // prevent default form submission action
  e.preventDefault();

  // get the gitHub username input field on the DOM
  let usernameInput = document.getElementById('usernameInput');

  // get the value of the gitHub username input field
  let gitHubUsername = usernameInput.value;

  // run gitHub API function, passing in the gitHub username
  requestUserRepos(gitHubUsername);
})


function requestUserRepos(username){
  // create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // github endpoint
  const url = `https://api.github.com/users/${username}/repos`;

  // opening a new connection, using GET via endpoint
  // providing 3 arguments (GET/POST, The URL, Async True/False)
  xhr.open('GET', url, true);

  // when request is received
  // process it here
  xhr.onload = function() {

    // parse API data into JSON
    const data = JSON.parse(this.response);
    let root = document.getElementById('userRepos');
    while (root.firstChild) {
      root.removeChild(root.firstChild);
    }

    // loop over each object in data array
    for (let  i in data) {
      // Get the ul with id of of userRepos
      let ul = document.getElementById('userRepos');
      // Create variable that will create li's to be added to ul
      let li = document.createElement('li');
      // Add Bootstrap list item class to each li
      li.classList.add('list-group-item');
      // Create the html markup for each li
      li.innerHTML = (`
        <p><strong>Repo:</strong> ${data[i].name}</p>
        <p><strong>Description:</strong> ${data[i].description}</p>
        <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
      `);
      // Append each li to the ul
      ul.appendChild(li);
    }
  }

  // send the request to the server
  xhr.send();
}