/*
Bio Part
*/
var bio = {
    "name": "Zeyu Wang",
    "role": "Front-end Developer",
    "biopic": "images/fry.jpg ",
    "welcomeMessage": "A junior front end developer.",
    "contacts": {
        "mobile": "0450041077",
        "email": "wzy.franklin@gmail.com",
        "github": "ZeyuWangGit",
        "location": "Sydney"
    },
    "skill": ["HTML/CSS", "JavaScript & jquery", "Java/Python/C/C#/C++"],
    display: function() {}
};

bio.display = function() {

    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedrole);

    var formattedHeadrName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedHeadrName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);


    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedgithub);
    $("#footerContacts").append(formattedlocation);

    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMessage);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    $("#header").append(HTMLskillsStart);

    bio.skill.forEach(function(skills) {
        var formattedSkills = HTMLskills.replace("%data%", skills);
        $("#header").append(formattedSkills);
    });
};

bio.display();


var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "Course Developer",
        "location": "Sydney",
        "dates": "Feb 2014 - Current",
        "description": "Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition Descripition"
    }, {
        "employer": "LearnBIG",
        "title": "Software Engineer",
        "location": "Melbourne",
        "dates": "May 2013 - Jan 2014",
        "description": "Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition Descripition"
    }, {
        "employer": "Netease",
        "title": "Programmer",
        "location": "sydney",
        "dates": "Jul 2012 - May 2013",
        "description": "Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition Descripition"
    }, {
        "employer": "Shengli High School",
        "title": "Tech Assistant",
        "location": "Sydney",
        "dates": "Jun 2009 - Jun 2012",
        "description": "Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition Descripition"
    }],
    display: function() {}
};

work.display = function() {

    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedemployer = HTMLworkEmployer.replace("%data%", job.employer);

        $(".work-entry:last").append(formattedemployer);
        var formattedtitle = HTMLworkTitle.replace("%data%", job.title);

        $(".work-entry:last").append(formattedtitle);
        var formattedlocation = HTMLworkLocation.replace("%data%", job.location);

        $(".work-entry:last").append(formattedlocation);
        var formatteddates = HTMLworkDates.replace("%data%", job.dates);

        $(".work-entry:last").append(formatteddates);
        var formatteddescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formatteddescription);
    });
};

work.display();


var project = {
    "projects": [{
        "title": "Front-end Web Develop",
        "dates": "Feb 2014 - Current",
        "descriptions": "Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition DescripitionDescripition Descripition Descripition Descripition Descripition",
        "images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
    }],
    display: function() {}
};

project.display = function() {

    project.projects.forEach(function(proj) {


        $("#projects").append(HTMLprojectStart);

        var formattedtitle = HTMLprojectTitle.replace("%data%", proj.title);
        $(".project-entry:last").append(formattedtitle);

        var formatteddates = HTMLprojectDates.replace("%data%", proj.title);
        $(".project-entry:last").append(formatteddates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", proj.descriptions);
        $(".project-entry:last").append(formattedDescription);

        proj.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

project.display();



/*
Education Part
*/

var education = {
    "schools": [{
        "name": "Australian National University",
        "location": "Canberra",
        "degree": "Master of computing",
        "url": "http://www.anu.edu.au",
        "major": ["Computer Science", "Artificial Intelligence"],
        "dates": "2016.2-2017.11"
    }, {
        "name": "SouthWest Jiaotong University",
        "location": "Canberra",
        "degree": "Bachelor of Internet of Thing",
        "url": "http://www.swjtu.com",
        "major": ["Internet of Thing", "Computer Scinece", "Microelectronics"],
        "dates": "2011.9-2015.7"
    }],
    "onlineCourses": [{
        "title": "Front-end Developer",
        "school": "Udacity",
        "dates": "2017/01",
        "url": "http://www.udacity.com"
    }],
    display: function() {}
};

education.display = function() {

    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(sch) {

        var formattedname = HTMLschoolName.replace("%data%", sch.name);
        $(".education-entry:last").append(formattedname);

        var formattedDegree = HTMLschoolDegree.replace("%data%", sch.degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", sch.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", sch.location);
        $(".education-entry:last").append(formattedLocation);

        sch.major.forEach(function(maj) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", maj);
            $(".education-entry:last").append(formattedMajor);
        });
    });
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {

        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        $(".education-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        $(".education-entry:last").append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".education-entry:last").append(formattedURL);
    });
};
education.display();

$("#mapDiv").append(googleMap);