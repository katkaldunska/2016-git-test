$(function () {
    var patientsList = [
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Piotr", lastName: "Kurek" },
        { firstName: "Kasia", lastName: "Karek" },
        { firstName: "Basia", lastName: "Kerek" },
        { firstName: "Asia", lastName: "Kirek" }

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