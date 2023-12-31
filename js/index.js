const BASE_URL = "http://localhost:3000/exercises";
//ensure DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchExercises();
});
//render fetched exercises
function renderExercises(exercises) {
  const exerciseNames = document.getElementById("biceps");

  exerciseNames.innerHTML=''
  exercises.forEach((exercise) => {
    /* //exerciseNames.innerHTML += `<li>${exercise.name}<\li>`;
    this was to render the names of the exercises */

    //create elements dynamically and append them to have the cards
    //1st create the main div,assign it a class then append it
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("col");
    //new div
    const cardDiv = document.createElement("div", "h-30");
    cardDiv.classList.add("card");
    //append the image before appending the card to the main div
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = exercise.image;
    image.alt = exercise.name;

    //like button
    const button=document.createElement('button')
    button.innerText='🤍'
    button.classList.add("like-btn")
    cardDiv.appendChild(button)

    //have a h5 for the title
    const title = document.createElement("h5");
    title.classList.add("card-title", "show");
    title.textContent = exercise.name;

    //function to show
    //title.setAttribute('onclick', `show()`)


    cardDiv.appendChild(image);
    //create cardbody div that is inside the card div
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //append other details
  
    const type=document.createElement('p')
    type.classList.add('card-text', 'hidden')
    type.textContent=`Type: ${exercise.type}`
  
    
    const equipment=document.createElement('p')
    equipment.classList.add('card-text')
    equipment.textContent=`Equipment: ${exercise.equipment}`

    const difficulty=document.createElement('p')
    difficulty.classList.add('card-text')
    difficulty.textContent=`Difficulty: ${exercise.difficulty}`

    const instructions=document.createElement('p')
    instructions.classList.add('card-text')
    instructions.textContent=`Instructions: ${exercise.instructions}`


    //hide
    cardBody.classList.add('hide')
    

    cardDiv.appendChild(title);
    cardBody.appendChild(type)
    cardBody.appendChild(equipment)
    cardBody.appendChild(difficulty)
    cardBody.appendChild(instructions)

    cardDiv.appendChild(cardBody);
    
    mainDiv.appendChild(cardDiv);

    exerciseNames.appendChild(mainDiv);
  });
//like function
  const like=document.querySelectorAll('.like-btn')
  like.forEach(btn => {
    btn.addEventListener('click',(e) =>{
      e.currentTarget.innerText='❤'
    })
  })
//show function
  const titles=document.querySelectorAll('.show')
titles.forEach(title => {
  title.addEventListener('click', (e) =>{
    e.currentTarget.parentElement.querySelector('.card-body').classList.toggle('hide')
  })
})

}

//fetch data from the public API
function fetchExercises() {
  fetch(BASE_URL, {
    method: "GET",
  })
    .then((res) => res.json())
    .then(renderExercises)
    .catch((err) => {
      console.log(err);
    });
}
