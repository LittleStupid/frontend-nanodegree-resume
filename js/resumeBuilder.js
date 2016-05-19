/*
This is empty on purpose! Your code to build the resume will go here.
 */
 function displayHead() {
   var formattedName = HTMLheaderName.replace( "%data%", "Tom");

   var role = "Web Developer";
   var formattedRole = HTMLheaderRole.replace( "%data%", role );

   $("#header").prepend( formattedRole );
   $("#header").prepend( formattedName );
 }

 displayHead();


var bio = {
  "name": "Tom",
  "role": "Web Developer",
  "contacts": {
    "mobile": "12-34-5678",
    "email": "tom@xx.com",
    "github": "http://github.com/tom",
    "twitter": "tom",
    "location": "L.A.",
  },
  "welcomeMessage": "Hello my friend!",
  "skills": [ "C++", "Java", "Python"],
  "biopic": "images/fry.jpg",

  "display": function() {
    var formattedMobile = HTMLmobile.replace( "%data%", bio.contacts.mobile );
    $("#footerContacts, #topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace( "%data%", bio.contacts.email );
    $("#footerContacts, #topContacts").append( formattedEmail );

    var formattedGitUrl = HTMLgithub.replace( "%data%", bio.contacts.github );
    $("#footerContacts, #topContacts").append( formattedGitUrl );

    var formattedTwitter = HTMLtwitter.replace( "%data%", bio.contacts.twitter );
    $("#footerContacts, #topContacts").append( formattedTwitter );

    var formattedLoc = HTMLlocation.replace( "%data%", bio.contacts.location );
    $("#footerContacts, #topContacts").append( formattedLoc );

    var formmattedPic = HTMLbioPic.replace( "%data%", bio.biopic );
    $("#header").append( formmattedPic );

    var formattedWelcomMsg = HTMLwelcomeMsg.replace( "%data%", bio.welcomeMessage );
    $("#header").append( formattedWelcomMsg );

    if( bio.skills.length > 0 ) {
      $("#header").append( HTMLskillsStart );
    }

    for( var i = 0; i < bio.skills.length; i++ ) {
      var formattedSkill = HTMLskills.replace( "%data%", bio.skills[i] );
      $("#skills").append( formattedSkill );
    }
  }
};

bio.display();


var work = {
  "jobs": [
    {
      "employer": "A.B.C Group",
      "title": "guard",
      "location": "Block Queen",
      "dates": "2000-2004",
      "description": "part time job",
    },
    {
      "employer": "D.C.B Group",
      "title": "programmer",
      "location": "King Area",
      "dates": "in progress",
      "description": "Web Developer",
    }
  ],

  "display": function() {
    for( var i = 0; i <  work.jobs.length; i++ ) {
      $("#workExperience").append( HTMLworkStart );

      var formattedEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[i].employer );
      var formattedTitle = HTMLworkTitle.replace( "%data%", work.jobs[i].title );

      var work_info = formattedEmployer + formattedTitle;
      $(".work-entry:last").append( work_info );

      var formattedDates = HTMLworkDates.replace( "%data%", work.jobs[i].dates );
      $(".work-entry:last").append( formattedDates );

      var formattedLoc = HTMLworkLocation.replace( "%data%", work.jobs[i].location );
      $(".work-entry:last").append( formattedLoc );

      var formattedDescription = HTMLworkDescription.replace( "%data%", work.jobs[i].description );
      $(".work-entry:last").append( formattedDescription );
    }
  }
};

work.display();

var projects = {
  "projects": [
    {
      "title": "Company's website",
      "dates": "2001-2002",
      "description": "Company's home page",
      "images": [ "images/197x148.gif", "images/197x148.gif"],
    },
    {
      "title": "Company's another website",
      "dates": "2001-2003",
      "description": "Company's new page",
      "images": [ "images/197x148.gif", "images/197x148.gif"],
    },
  ],

  "display": function() {
    for( var i = 0; i < projects.projects.length; i++ ) {
      $("#projects").append( HTMLprojectStart );

      var formattedTitle = HTMLprojectTitle.replace( "%data%", projects.projects[i].title );
      $(".project-entry:last").append( formattedTitle );

      var formattedDates = HTMLprojectDates.replace( "%data%", projects.projects[i].dates );
      $(".project-entry:last").append( formattedDates );

      var formattedDescription = HTMLprojectDescription.replace( "%data%", projects.projects[i].description );
      $(".project-entry:last").append( formattedDescription );

      for( var j = 0; j < projects.projects[i].images.length; j++ ) {
        var formattedImg = HTMLprojectImage.replace( "%data%", projects.projects[i].images[j] );
        $(".project-entry:last").append( formattedImg );
      }
    }
  }
};

projects.display();

var education = {
  "schools": [
    {
      "name": "Angel School",
      "location": "West Road 123",
      "degree": "master",
      "majors":[ "CS" ],
      "dates": "1911-2013",
      "url": "http://angel_school.com",
    },
    {
      "name": "Rock School",
      "location": "East Montain",
      "degree": "master",
      "majors":[ "CS" ],
      "dates": "1911-2015",
      "url": "http://rock_school.com",
    },
  ],

  "onlineCourses": [
    {
      "title": "English",
      "school": "Big City School",
      "date": "1999-2013",
      "url": "http://big_city_school.com",
    },
    {
      "title": "Math",
      "school": "Small City School",
      "date": "2000-2003",
      "url": "http://small_city_school.com"
    }
  ],

  "display": function() {
    for( var i = 0; i < education.schools.length; i++ ) {
      $("#education").append( HTMLschoolStart );

      formattedName = HTMLschoolName.replace( "%data%", education.schools[i].name );
      formattedDegree = HTMLschoolDegree.replace( "%data%", education.schools[i].degree );
      $(".education-entry:last").append( formattedName + formattedDegree );

      formattedDates = HTMLschoolDates.replace( "%data%", education.schools[i].dates );
      $(".education-entry:last").append( formattedDates );

      formattedLoc = HTMLschoolLocation.replace( "%data%", education.schools[i].location );
      $(".education-entry:last").append( formattedLoc );

      for( var mj = 0; mj < education.schools[i].majors.length; mj++ ) {
        formattedMajor = HTMLschoolMajor.replace( "%data%", education.schools[i].majors[mj] );
        $(".education-entry:last").append( formattedMajor );
      }
    }

    $("#education").append( HTMLonlineClasses );
    for( var j = 0; j < education.onlineCourses.length; j++ ) {
      $("#education").append( HTMLonlineStart );

      formattedTitle = HTMLonlineTitle.replace( "%data%", education.onlineCourses[j].title );
      formattedSchool = HTMLonlineSchool.replace( "%data%", education.onlineCourses[j].school );

      $(".online-entry:last").append( formattedTitle + formattedSchool );

      formattedDates = HTMLonlineDates.replace( "%data%", education.onlineCourses[j].date );
      $(".online-entry:last").append( formattedDates );

      formattedURL = HTMLonlineURL.replace( "%data%", education.onlineCourses[j].url );
      $(".online-entry:last").append( formattedURL );
    }
  }
};

education.display();


$("#mapDiv").append( googleMap );
