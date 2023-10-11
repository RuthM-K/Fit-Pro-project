const BASE_URL= "http://localhost:4000/exercises";
//ensure DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
fetchExercises()

});
//render fetched exercises
function renderExercises(Exercises){
    const apiDetailsDiv= document.querySelector('.api-details')

    Exercises.forEach((exercise) => {
        const exerciseGif =document.createElement('img')

        exerciseGif.src=exercise.image
        

        exerciseGif.addEventListener('click', () => {
            console.log(`Clicked ${exercise.image}`)
        })
        apiDetailsDiv.appendChild(exerciseGif)
    });

}

//fetch data from the public API
function fetchExercises () {

    fetch("http://localhost:4000/exercises", {
        method:'GET',
    })
    .then((res) => res.json())
    .then(renderExercises)
    .catch((err) => {
        console.log(err)
    })
}