const root = document.querySelector(".root");



let Name = prompt("Enter your name: ");
let age = parseInt(prompt("How old are you ? "));
let yearsOfExperience = prompt("How many years of experience do you have ?", 0);
let rating = prompt("On a scale from 1 to 10 how would you rate yourself ?", 1);
let experienceLevel;
let ratingCategory;
let bonus;
let finalSalary;
let shift;


if (Name && !isNaN(age) && !isNaN(yearsOfExperience) && !isNaN(rating) && rating >= 1 && rating <= 10) {
    if (yearsOfExperience < 2) {
        experienceLevel = "Junior";
        if (yearsOfExperience <= 2) {
            bonus = "10%";
            finalSalary = 1000 + (0.1 * 100);
        }
    } else if (yearsOfExperience >= 2 && yearsOfExperience <= 5) {
        experienceLevel = "Mid-Level";
        if (yearsOfExperience >= 3 && yearsOfExperience <= 5) {
            bonus = "15%";
            finalSalary = 1000 + (0.15 * 100);

        }
    } else if (yearsOfExperience > 5 && yearsOfExperience <= 10) {
        experienceLevel = "Senior";
        if (yearsOfExperience >= 5) {
            bonus = "20%";
            finalSalary = 1000 + (0.2 * 100);
        }
    } else {
        experienceLevel = "Expert";
        if (yearsOfExperience >= 5) {
            bonus = "20%";
            finalSalary = 1000 + (0.2 * 100);

        }
    }


    console.log(experienceLevel);


    switch (true) {
        case rating >= 9:
            ratingCategory = "Excellent";
            break;
        case rating >= 7 && rating <= 8:
            ratingCategory = "Good";
            break;
        case rating >= 5 && rating <= 6:
            ratingCategory = "Average";
            break;
        case rating < 5:
            ratingCategory = "Needs Improvement";
            break;
        default:
            ratingCategory = "Unknown";
            break;
    }
    let now = new Date;
    let currentHour = now.getHours;
    if (currentHour >= 9 && currentHour <= 18) {
        shift = "day shift";
    }
    else {
        shift = "night shift";
    }


    root.innerHTML = `<h1>Your Info:</h1>
                    <p>Name: ${Name}</p>
                    <p>Age: ${age} </p>
                    <p>Level of experience: ${experienceLevel} </p>
                    <p>Rating Category: ${ratingCategory} </p>
                    <p>Shift: ${shift} </p>
                    <p>Final Salary: ${finalSalary} </p>
                    `
    alert(`         Your Info:
                    Name: ${Name}
                    Age: ${age}
                    Level of experience: ${experienceLevel}
                    Rating Category: ${ratingCategory}
                    Shift: ${shift}
                    Final Salary: ${finalSalary}
                    `)
    console.log(`   Your Info:
                    Name: ${Name}
                    Age: ${age}
                    Level of experience: ${experienceLevel}
                    Rating Category: ${ratingCategory}
                    Shift: ${shift}
                    Final Salary: ${finalSalary}`);


}
else {
    root.innerHTML = `<h1>insufficient information please answer all of the questions</h1>`
}