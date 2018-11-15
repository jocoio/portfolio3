var requestURL = './projects.json';

var request = new XMLHttpRequest();

var header = document.querySelector('header');
var projectsSection = document.querySelector('projects');


request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var projectsObj = request.response;

  showProjects(projectsObj);
}

function showProjects(jsonObj) {
  var projects = jsonObj['projects'];

  for (var i = 0; i < projects.length; i++) {
    var myProject = document.createElement('article');
    var myTitle = document.createElement('h5');
    var myDescription = document.createElement('p');
    var myTags = document.createElement('ul');

    // Add a link if there's one provided
    if (projects[i].link !== "") {
      myTitle.innerHTML = '<a href="' + projects[i].link + '" target="_blank">' + projects[i].title + '</a>';
    }
    else {
      myTitle.innerText = projects[i].title;
    }

    myDescription.textContent = projects[i].description;
    myDescription.className = "project-description";

    var tags = projects[i].tags;
    // For each category
    for (var j = 0; j < tags.length; j++) {
      // For each tag in the category
      for (var t = 0; t < tags[j].length; t++) {

        var tag = document.createElement('li'); // Create the tag block
        tag.textContent = tags[j][t]; // Grab the text

        // Adds color based on which category iteration the loop is on
        switch (j) {
          case 0:
            tag.className = "project-category red"; // Design
            break;
          case 1:
            tag.className = "project-category blue"; // Code
            break;
          case 2:
            tag.className = "project-category green"; // And more!
            break;
          default:
            tag.className = "project-category";
        }
        myTags.appendChild(tag);
      }
    }

    myTags.className = "project-tags";

    myProject.appendChild(myTitle);
    myProject.appendChild(myDescription);
    myProject.appendChild(myTags);

    projectsSection.appendChild(myProject);
  }
}