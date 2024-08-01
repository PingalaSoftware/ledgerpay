document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    try {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value || "";
      const lastName = document.getElementById("lastName").value || "";
      const email = document.getElementById("email").value || "";
      const number = document.getElementById("phone").value || "";
      const telegram = document.getElementById("telegram").value || "";
      const state = document.getElementById("state").value || "";
      const country = document.getElementById("country").value || "";
      const data = {
        firstName,
        lastName,
        email,
        number,
        telegram,
        state,
        country,
      };

      fetch("https://b2b-dev-admin-on-prem.ledgermail.io/api/v1/pre-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Form submitted successfully!");
          form.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  });
});
