$(function () {
    var patientsList = [
        { firstName: "Jan", lastName: "Kowalski" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        {firstName: "Piotr", lastName: "Kurek" },
        {firstName: "Kasia", lastName: "Karek"}
    ];
    var doctorsList = [
        { firstName: "Als", lastName: "Nowak" },
        { firstName: "Gosia", lastName: "Krek"}
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}