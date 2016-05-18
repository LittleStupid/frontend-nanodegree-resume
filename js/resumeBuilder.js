/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace( "%data%", "Tom");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace( "%data%", role );

$("#header").prepend( formattedRole );
$("#header").prepend( formattedName );

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
  "welcome_message": "Hello my friend!",
  "skills": [ "C++", "Java", "Python"],
  "biopic": "images/fry.jpg",
};

var formattedMobile = HTMLmobile.replace( "%data%", bio.contacts.mobile );
$("#topContacts").append( formattedMobile );

var formattedEmail = HTMLemail.replace( "%data%", bio.contacts.email );
$("#topContacts").append( formattedEmail );

var formattedGitUrl = HTMLgithub.replace( "%data%", bio.contacts.github );
$("#topContacts").append( formattedGitUrl );

var formattedTwitter = HTMLtwitter.replace( "%data%", bio.contacts.twitter );
$("#topContacts").append( formattedTwitter );

var formattedLoc = HTMLlocation.replace( "%data%", bio.contacts.location );
$("#topContacts").append( formattedLoc );

var formmattedPic = HTMLbioPic.replace( "%data%", bio.biopic );
$("#header").append( formmattedPic );

var formattedWelcomMsg = HTMLwelcomeMsg.replace( "%data%", bio.welcome_message );
$("#header").append( formattedWelcomMsg );

$("#header").append( HTMLskillsStart );

var formattedSkill = HTMLskills.replace( "%data%", bio.skills[0] );
$("#skills-h3").append( formattedSkill );

var formattedSkill = HTMLskills.replace( "%data%", bio.skills[1] );
$("#skills-h3").append( formattedSkill );

var formattedSkill = HTMLskills.replace( "%data%", bio.skills[2] );
$("#skills-h3").append( formattedSkill );

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
  ]
};

for( var job in work.jobs ) {
  $("#workExperience").append( HTMLworkStart );

  var formattedEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[job].employer );
  var formattedTitle = HTMLworkTitle.replace( "%data%", work.jobs[job].title );

  var work_info = formattedEmployer + formattedTitle;
  $(".work-entry:last").append( work_info );

  var formattedDates = HTMLworkDates.replace( "%data%", work.jobs[job].dates );
  $(".work-entry:last").append( formattedDates );

  var formattedLoc = HTMLworkLocation.replace( "%data%", work.jobs[job].location );
  $(".work-entry:last").append( formattedLoc );

  var formattedDescription = HTMLworkDescription.replace( "%data%", work.jobs[job].description );
  $(".work-entry:last").append( formattedDescription );
}


var projects = {
  "prjcts": [
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
  ]
};

for( var project in projects.prjcts ) {
  $("#projects").append( HTMLprojectStart );

  var formattedTitle = HTMLprojectTitle.replace( "%data%", projects.prjcts[project].title );
  $(".project-entry:last").append( formattedTitle );

  var formattedDates = HTMLprojectDates.replace( "%data%", projects.prjcts[project].dates );
  $(".project-entry:last").append( formattedDates );

  var formattedDescription = HTMLprojectDescription.replace( "%data%", projects.prjcts[project].description );
  $(".project-entry:last").append( formattedDescription );

  for( var img in projects.prjcts[project].images ) {
    var formattedImg = HTMLprojectImage.replace( "%data%", projects.prjcts[project].images[img] );
    $(".project-entry:last").append( formattedImg );
  }
}

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
};

for( var school in education.schools ) {
  $("#education").append( HTMLschoolStart );

  formattedName = HTMLschoolName.replace( "%data%", education.schools[school].name );
  formattedDegree = HTMLschoolDegree.replace( "%data%", education.schools[school].degree );
  $(".education-entry:last").append( formattedName + formattedDegree );

  formattedDates = HTMLschoolDates.replace( "%data%", education.schools[school].dates );
  $(".education-entry:last").append( formattedDates );

  formattedLoc = HTMLschoolLocation.replace( "%data%", education.schools[school].location );
  $(".education-entry:last").append( formattedLoc );

  for( var mj in education.schools[school].majors ) {
    formattedMajor = HTMLschoolMajor.replace( "%data%", education.schools[school].majors[mj] );
    $(".education-entry:last").append( formattedMajor );
  }
}

$("#education").append( HTMLonlineClasses );
for( var course in education.onlineCourses ) {
  $("#education").append( HTMLonlineStart );

  formattedTitle = HTMLonlineTitle.replace( "%data%", education.onlineCourses[course].title );
  formattedSchool = HTMLonlineSchool.replace( "%data%", education.onlineCourses[course].school );

  $(".online-entry:last").append( formattedTitle + formattedSchool );

  formattedDates = HTMLonlineDates.replace( "%data%", education.onlineCourses[course].date );
  $(".online-entry:last").append( formattedDates );

  formattedURL = HTMLonlineURL.replace( "%data%", education.onlineCourses[course].url );
  $(".online-entry:last").append( formattedURL );
}

$("#mapDiv").append( googleMap );
