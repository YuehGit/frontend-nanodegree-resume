/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var name = "Yue Yang";
// var age = 25;
// console.log(name);
// var awesomeThoughts = "I am yue and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(awesomeThoughts);
// console.log(funThoughts);
// $("#main").append(funThoughts);
// var formattedName = HTMLheaderName.replace("%data%", name);
// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").append(formattedName);
// $("#header").append(formattedRole);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// var a = "audacity";
// var b = a.slice(1);
// var c = a.slice(5);
// console.log(b);
// console.log(c);
// var education = {};
// education["name"] = "GWU";
// $("#header").append(work["position"]);
// $("#header").append(education.name);


var bio = {
	"name": "Your Name",
	"role": "Your Role",
	"contact": {
		"mobile": "xxx-xxx-xxxx",
		"email": "xxx@example.com",
		"github": "GithubAddr",
		"twitter": "@xxx",
		"location": "Washington, DC"
	},
	"WelcomeMessage": "Welcome!",
	"skills": [
		"skill#1", "skill#2", "skills#3", "skills#4"],
	"bioPic": "images/bioPic.jpg"
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelMsg);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			if (bio.skills.hasOwnProperty(skill)) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills:last").append(formattedSkill);
            }
        }
	}
};

var work = {
	"jobs": [
		{
			"employer": "job#1employer",
			"title": "job#1title",
			"location": "Dallas, TX",
			"dates": "job#1dateBegin-dateEnd",
			"description": "job#1description"
		},
		{
			"employer": "job#2employer",
			"title": "job#2title",
			"location": "Lasvegas, NV",
			"dates": "job#2dateBegin-dateEnd",
			"description": "job#2description"
		}
	]
};

work.display = function() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace(
			"%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

var projects = {
	"projects": [
		{
			"title": "project#1title",
			"dates": "project#1dateBegin-dateEnd",
			"description": "project#1description",
			"projectPic": [
				"images/project1-1.jpg",
				"images/project1-2.jpg"
			]
					
		},
		{
			"title": "project#2title",
			"dates": "project#2dateBegin-dateEnd",
			"description": "project#2description",
			"projectPic": [
				"images/project2-1.jpg",
				"images/project2-2.jpg"
			]
					
		}
	]
};

projects.display = function() {
	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace(
			"%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].projectPic.length > 0) {
			for (pic in projects.projects[project].projectPic) {
				var formattedprojectImage = HTMLprojectImage.replace(
					"%data%", projects.projects[project].projectPic[pic]);
				$(".project-entry:last").append(formattedprojectImage);
			}
		}
	}
}

var education = {
	"schools": [
		{
			"name": "Schools#1",
			"location": "MountainView, CA",
			"degree": "school#1degree",
			"majors": ["Schools#1major1"],
			"dates": "School#1dates",
			"url": "School#1Url"
		},
		{
			"name": "Schools#2",
			"location": "Seattle, WA",
			"degree": "school#2degree",
			"majors": ["Schools#2major1"],
			"dates": "School#2dates",
			"url": "School#2Url"
		}
	],
	"onlineCourses": [
		{
			"title": "onlineCourse#1title",
			"school": "onlineCourse#1school",
			"dates": "onlineCourse#1dates",
			"url": "onlineCourse#1Url"
		},
		{
			"title": "onlineCourse#2title",
			"school": "onlineCourse#2school",
			"dates": "onlineCourse#2dates",
			"url": "onlineCourse#2Url"
		}
	]
};
education.display = function() {
	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedName = formattedName.replace("#", education.schools[school].url);
		$(".education-entry:last").append(formattedName);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace(
					"%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	} 

}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);





// $("#main").append(internationalizeButton);

// function inName(oldName) {

// 	var Name = oldName.trim().split(" ");
// 	Name[0] = Name[0].slice(0, 1).toUpperCase() + Name[0].slice(1).toLowerCase();
// 	Name[1] = Name[1].toUpperCase();
// 	var newName = Name.join(" ");
// 	return newName;
// }

