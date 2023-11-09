window.onload=function(){
    document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementsByName('firstName')[0].value;
    var lastName = document.getElementsByName('lastName')[0].value;

    var data = {
        firstName: firstName,
        lastName: lastName
    };

    fetch('https://gsq4n50sg0.execute-api.ap-south-1.amazonaws.com/home', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
}
