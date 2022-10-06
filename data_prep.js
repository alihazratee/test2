const fs = require("fs");
let students = [];
const prep = () => {

    return new Promise((resolve, reject) => {

        fs.readFile("./students.json", 'utf-8', (err, data) => {
            if (err) reject("unable to read file");
            students = JSON.parse(data);
            resolve();

        });

    });

}

const cpa = () => {

    return new Promise((resolve, reject) => {

        prep()
        .then(() => {
            const cpas = students.filter(s => {
                return s.program === "CPA";
            });

            if (cpas.length === 0) reject("no results returned");
            resolve(cpas);

        }).catch(err => {
            reject(err);
        });

    });

}

const highGPA = () => {

    return new Promise((resolve, reject) => {

        prep()
        .then(() => {

            const highest = students.reduce((high, s) => {

                if (s.gpa > high.gpa) high = s;
                return high;
            });

            if (highest === undefined) reject("Failed finding the student with the highest GPA");
            resolve(highest);

        }).catch((err) => {
            reject(err);
        });

    });
}

module.exports = { prep, cpa, highGPA }
 