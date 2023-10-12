const BASE_URL = "http://localhost:3000/exercises";
//ensure DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchExercises();
});
//render fetched exercises
function renderExercises(exercises) {
  const exerciseNames = document.getElementById("biceps");

  exercises.forEach((exercise) => {
    /* //exerciseNames.innerHTML += `<li>${exercise.name}<\li>`;
    this was to render the names of the exercises */

    //create elements dynamically and append them to have the cards
    //1st create the main div,assign it a class then append it
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("col");
    //new div
    const cardDiv = document.createElement("div", "h-50");
    //append the image before appending the card to the main div
    const image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = exercise.image;
    image.alt = exercise.name;

    cardDiv.appendChild(image);
    //create cardbody div that is inside the card div
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    //have a h5 for the title
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = exercise.name;
    cardBody.appendChild(title);

    cardDiv.appendChild(cardBody);

    cardDiv.classList.add("card");
    mainDiv.appendChild(cardDiv);

    exerciseNames.appendChild(mainDiv);
  });
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
