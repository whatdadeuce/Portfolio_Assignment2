/**
 * FileName: app.js
 * 
 * @author Kenneth Bato
 * @date June 10, 2016
 * 
 * StudentID: 300448795
 * website: portfolio-assignment2.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

//IIFE
(function () {
    "use strict";
    //Page switch statement based on the document title tag
    switch (document.title) {
        case "About Me":
            //create reference for aboutMe
            var aboutMe = document.getElementById("aboutMe");
            //data for aboutMe
            aboutMe.innerHTML = "<h2 class='display-1'>About Me</h2>" +
                "<p class='lead'>Architectural Technology Graduate with" +
                "five years of experience working for an Architectural Firm and " +
                "currently in school studying Software Engineering Technology.</p>" +
                "<hr class='m-y-md'>" +
                "<p>Passionate, self motivated, ambitious and enjoys learning especially those of personal interest.</p>";
            break;

        case "Projects":
            //create array reference for projectDesc
            var projectDesc = [];
            projectDesc[0] = document.getElementById("projectDescBakery");
            projectDesc[1] = document.getElementById("projectDescDairy");
            projectDesc[2] = document.getElementById("projectDescProduce");

            //date from projectDesc
            var DescArray = [];
            DescArray[0] = "<div class='panel'><h1>Grocery Interior - Bakery Department</h1>" +
                "<p>Interior rendering of proposed Bakery department design</p></div>";
            DescArray[1] = "<div class='panel'><h1>Grocery Interior - Dairy Department</h1>" +
                "<p>Interior rendering of proposed Dairy department design</p></div>";
            DescArray[2] = "<div class='panel'><h1>Grocery Interior - Produce Department</h1>" +
                "<p>Interior rendering of proposed Produce department design</p></div>";

            //iterate and check if projectDesc reference id exists on the page and apply appropriate data
            for (var i = projectDesc.length; i >= 0; i--) {
                if (projectDesc[i]) {
                    projectDesc[i].innerHTML = DescArray[i];
                }
            }
            break;

        case "Contact Me":
            //create reference for sendButton and contactForm
            var sendButton = document.getElementById("sendButton");
            var contactForm = document.getElementById("contactForm");

            //create variables for form fields
            var firstName = document.getElementById("firstName");
            var lastName = document.getElementById("lastName");
            var email = document.getElementById("email");
            var contactNumber = document.getElementById("contactNumber");
            var message = document.getElementById("message");

            //create event listener to sendButton to output a message to the console
            sendButton.addEventListener("click", function (event) {
                console.log("clicked");
            });

            //create event listener to contactForm to preventDefault submit behavior
            contactForm.addEventListener("submit", function (event) {
                event.preventDefault();
                showFormInputs();
                contactForm.reset();
                console.log("submitted");
            });

            //display form input values on the console
            function showFormInputs() {
                console.log("*******************************");
                console.log("First Name: " + firstName.value);
                console.log("Last Name : " + lastName.value);
                console.log("Email     : " + email.value);
                console.log("Contact # : " + contactNumber.value);
                console.log("Message   : " + message.value);
                console.log("*******************************");
            }
            break;
    }
})();
