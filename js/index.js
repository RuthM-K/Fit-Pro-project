const BASE_URL= "https://api.api-ninjas.com/v1/exercises";

//ensure DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
fetchExercises()

});

//fetch data from the public API
function fetchExercises () {
    fetch("https://api.api-ninjas.com/v1/exercises", {
        method:'GET',
        headers: {
            'X-Api-Key': '7UvwXqUHr77cwWKtdo2Ipg==elIKr1GaN2tC7shO'
        },

    })
    .then((res) => res.json())
    .then((exercises) => console.log(exercises))
    .catch((err) => console.log(err))
}