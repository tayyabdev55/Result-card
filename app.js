let form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    // Page reload hone se rokna
    event.preventDefault();


    // Marks lena

    let english = Number(document.querySelector("#english").value);

    let physics = Number(document.querySelector("#physics").value);

    let computer = Number(document.querySelector("#computer").value);

    let math = Number(document.querySelector("#math").value);

    let chemistry = Number(document.querySelector("#chemistry").value);

    let urdu = Number(document.querySelector("#urdu").value);

    let sindhi = Number(document.querySelector("#sindhi").value);


    // Total marks

    let total =
        english +
        physics +
        computer +
        math +
        chemistry +
        urdu +
        sindhi;


    // Percentage

    let percentage = (total / 700) * 100;


    // Grade

    let grade;

    if (percentage >= 80) {

        grade = "A+";

    } else if (percentage >= 70) {

        grade = "A";

    } else if (percentage >= 60) {

        grade = "B";

    } else if (percentage >= 50) {

        grade = "C";

    } else if (percentage >= 40) {

        grade = "D";

    } else {

        grade = "F";

    }


    // Pass / Fail

    let status;

    if (percentage >= 40) {

        status = "PASS";

    } else {

        status = "FAIL";

    }


    // Result show karna

    document.querySelector("#total").innerHTML =
        total + " / 700";

    document.querySelector("#percentage").innerHTML =
        percentage.toFixed(2) + "%";

    document.querySelector("#grade").innerHTML =
        grade;

    document.querySelector("#status").innerHTML =
        status;


    // Result card show

    document.querySelector(".result-page").style.display = "block";

});