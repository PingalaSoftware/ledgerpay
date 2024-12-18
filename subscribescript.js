// document.getElementById('nav-about-us').addEventListener('click', function () {
//     document
//         .getElementById('about-section')
//         .scrollIntoView({ behavior: 'smooth' });
// });

// document.getElementById('nav-security').addEventListener('click', function () {
//     document
//         .getElementById('platform-section')
//         .scrollIntoView({ behavior: 'smooth' });
// });

// document.getElementById('footer-home').addEventListener('click', function () {
//     document
//         .getElementById('hero-section')
//         .scrollIntoView({ behavior: 'smooth' });
// });

// document.getElementById('footer-card').addEventListener('click', function () {
//     document
//         .getElementById('card-section')
//         .scrollIntoView({ behavior: 'smooth' });
// });

// document
//     .getElementById('footer-about-us')
//     .addEventListener('click', function () {
//         document
//             .getElementById('about-section')
//             .scrollIntoView({ behavior: 'smooth' });
//     });

// document
//     .getElementById('footer-security')
//     .addEventListener('click', function () {
//         document
//             .getElementById('platform-section')
//             .scrollIntoView({ behavior: 'smooth' });
//     });

document
    .getElementById('subscribeForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('emailid').value;
        console.log('emailid: ', email);

        const data = { email: email };

        fetch(
            'https://b2b-dev-admin-on-prem.ledgermail.io/api/v1/pre-register/subscribe',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        'Network response was not ok ' + response.statusText
                    );
                }
                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
                alert(data.message);

                // Optionally, you can display a success message to the user
            })
            .catch((error) => {
                console.error(
                    'There was a problem with your fetch operation:',
                    error
                );
                // Optionally, you can display an error message to the user
            });
    });
