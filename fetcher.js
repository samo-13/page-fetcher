// Implement a node app called fetcher.js.

// Takes two command line arguments:
// --- a URL
// --- a local file path

// --- downloads the resource at the URL to the local path on your machine. 
// --- upon completion, it will print out a message like Downloaded and saved 1235 bytes to ./index.html.

const fs = require('fs');
const request = require('request');

let url = process.argv
url = url.slice(2); // gets the command line arguments and ignores initial items

request(url[0], (error, response, body) => { 
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  let fileSize = body.length;
  let localPath = url[1];

  fs.writeFile(url[1], body, err => {
    if (err) throw err;
    console.log('Complete!');
    console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`)
  })
});

// development notes
// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)