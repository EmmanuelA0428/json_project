//console log
console.dir(profiles);



//set up

let user = document.querySelector("#user");



for (let i = 0; i < 12; i++ ) {
    let newDiv = document.createElement("div");
    let text = document.createElement("p");
    let newImg = document.createElement("img");
    
    //call out
    
    text.innerHTML = "Name: " + profiles.results[i].name.first + " " + profiles.results[i].name.last + "<br>" + "Location: " + profiles.results[i].location.street.number + " " + profiles.results[i].location.street.name + ", " + profiles.results[i].location.city + "<br>" + "Email: " + profiles.results[i].email
    
    newImg.src = profiles.results[i].picture.large;


    //add img and text to div

    newDiv.appendChild(newImg);
    newDiv.appendChild(text);
    user.appendChild(newDiv);



}


























