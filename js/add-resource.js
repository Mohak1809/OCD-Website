document.addEventListener("DOMContentLoaded", () => {
    const resourceForm = document.getElementById("resource-form");

    resourceForm.addEventListener("submit", (e) => {
        alert("Resource added successfully!");
    });
});