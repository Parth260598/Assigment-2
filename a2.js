/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Parth  Student ID: 136797230 Date: 23-05-2024
*
********************************************************************************/

const collegeData = require('./Modules/CollegeData');                           // Import the collegeData module
                                                                                // Initialize the data
collegeData.initialize()
    .then(() => {
        console.log("Initialization successful");
                                                                                // Retrieve Students data
        return collegeData.getAllStudents();
    })
    .then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);
                                                                                // Retriving Courses data 
        return collegeData.getCourses();
    })
    .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);
                                                                                // Retriving TA data 
        return collegeData.getTAs();
    })
    .then((TAs) => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    })
                                                                                // Output if there any errors occure that will be catch here
    .catch((err) => {
        console.log(err);
    });
