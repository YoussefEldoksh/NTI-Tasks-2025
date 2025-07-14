const root = document.querySelector(".root");
let Name = prompt("Enter your name: ");
let DOB = parseInt(prompt("Enter your date of birth (year): "));
let isStudent = confirm("Are you a student ?");

if (!isStudent) isStudent = false;

let currentDate = new Date().getFullYear();

let age = currentDate - DOB;



if (Name && DOB) {
    if (age <= 0) {
        root.innerHTML = `<h1>Invalid Age please</h1>`;
    }
    if (age < 13) {
        root.innerHTML = `<h1>Hello ${Name}, you are ${age} years old.</h1>
                        <h1>You are a Kid</h1>
        `;
        alert(`Hello ${Name}, you are ${age} years old.\nYou are a Kid.`);
        console.log(`Hello ${Name}, you are ${age} years old.\nYou are a Kid.`);


        if (isStudent === true) {
            root.innerHTML = `${root.innerHTML} <p> Don't forget to study !!</p>`;
            alert('Don\'t forget to study !!');
            console.log('Don\'t forget to study !!');
        }
    }
    else if (age >= 13 && age <= 17) {
        root.innerHTML = `<h1>Hello ${Name}, you are ${age} years old.</h1>
                                <h1>You are a Teen</h1>
`;
        alert(`Hello ${Name}, you are ${age} years old.\nYou are a Teen.`);
        console.log(`Hello ${Name}, you are ${age} years old.\nYou are a Teen.`);


        if (isStudent === true) {
            root.innerHTML = `${root.innerHTML} <p> Don't forget to study !! </p> `;
            alert('Don\'t forget to study !!');
            console.log('Don\'t forget to study !!');
        }
    }
    else if (age >= 18 && age <= 59) {
        root.innerHTML = `<h1>Hello ${Name}, you are ${age} years old.</h1>
                                <h1>You are a Adult</h1>
`;
        alert(`Hello ${Name}, you are ${age} years old.\nYou are a Adult.`);
        console.log(`Hello ${Name}, you are ${age} years old.\nYou are a Adult.`);


        if (isStudent === true) {
            root.innerHTML = `${root.innerHTML} <p> Don't forget to study !! </p>`;
            alert('Don\'t forget to study !!');
            console.log('Don\'t forget to study !!');
        }
    }
    else {
        root.innerHTML = `<h1>Hello ${Name}, you are ${age} years old.</h1>
                                <h1>You are a Senior</h1>
`;
        alert(`Hello ${Name}, you are ${age} years old.\nYou are a Senior.`);
        console.log(`Hello ${Name}, you are ${age} years old.\nYou are a Senior.`);


        if (isStudent === true) {
            root.innerHTML = `${root.innerHTML} <p>Don't forget to study !! </p> `;
            alert('Don\'t forget to study !!');
            console.log('Don\'t forget to study !!');
        }
    }
}


