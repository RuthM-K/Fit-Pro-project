const BASE_URL= "https://api.api-ninjas.com/v1/exercises?muscle=glutes";
//ensure DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
fetchExercises()

});
//render fetched exercises
function renderExercises(Exercises){
    const apiDetailsDiv= document.querySelector('.api-details')

    Exercises.forEach((exercise) => {
        const exerciseName =document.createElement('h1')

        exerciseName.textContent=exercise.name

        exerciseName.addEventListener('click', () => {
            console.log(`Clicked ${exercise.name}`)
        })
        apiDetailsDiv.appendChild(exerciseName)

    });

}

//fetch data from the public API
function fetchExercises () {

    fetch("https://api.api-ninjas.com/v1/exercises?muscle=glutes", {
        method:'GET',
        headers: {
            'X-Api-Key': '7UvwXqUHr77cwWKtdo2Ipg==elIKr1GaN2tC7shO'
        },

    })
    .then((res) => res.json())
    .then(renderExercises)
    .catch((err) => {
        console.log(err)
    })
}