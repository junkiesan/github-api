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
    // log the response
    console.log(data);

    // loop over each object in data array
    for (let  i in data) {
      // log the repo name
      console.log('Repo:', data[i].name);
      // log the repo description
      console.log('Repo:', data[i].description);
      // log the repo url
      console.log('Repo:', data[i].html_url);
      // add a separator
      console.log('====================');
    }
  }

  // send the request to the server
  xhr.send();
}

// call function with a username
requestUserRepos('junkiesan');