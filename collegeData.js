const fs = require('fs');
const path = require('path');

// class data to contain 2 parameters which is : students and courses
class Data {
    constructor(students, courses) {
        this.students = students;   //pointing  to students 
        this.courses = courses;     //pointing to courses
    }
}

//declaring the variable dataCollection
let datainfoCollection = null;      

// Function to initialize the data by reading from the JSON files 
function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../data/students.json'), 'utf8', (err, studentData) => {
            if (err) {
                reject("unable to read students.json");
                return;
            }

            let students = JSON.parse(studentData);

            fs.readFile(path.join(__dirname, '../data/courses.json'), 'utf8', (err, courseData) => {
                if (err) {
                    reject("unable to read courses.json");
                    return;
                }

                let courses = JSON.parse(courseData);

                datainfoCollection = new Data(students, courses);           // Create an instance of the Data class with parsed students and courses
                resolve();
            });
        });
    });
}

function getAllStudents() {                                 // Function to get all students
    return new Promise((resolve, reject) => {
        if (datainfoCollection.students.length === 0) {
            reject("no results returned");
        } else {
            resolve(datainfoCollection.students);
        }
    });
}

function getTAs() {                                          // Function to get all TAs (students with TA property set to true
    return new Promise((resolve, reject) => {
        let TAs = datainfoCollection.students.filter(student => student.TA);
        if (TAs.length === 0) {
            reject("no results returned");
        } else {
            resolve(TAs);
        }
    });
}

function getCourses() {                                    // Function to get all courses
    return new Promise((resolve, reject) => {
        if (datainfoCollection.courses.length === 0) {
            reject("no results returned");
        } else {
            resolve(datainfoCollection.courses);
        }
    });
}
// Export the functions to be used in other files
module.exports = { initialize, getAllStudents, getTAs, getCourses };
