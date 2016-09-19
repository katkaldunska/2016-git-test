$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Piotr", lastName: "Kurek" },
        { firstName: "Kasia", lastName: "Karek" },
        { firstName: "Basia", lastName: "Kerek" },

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