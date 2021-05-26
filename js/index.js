const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async (numUsers) => {
    const usersReq = await fetch(`https://randomuser.me/api?results=${numUsers}`)
    const data = await usersReq.json();
    const userResults = data.results
   displayUsers(userResults)
    
}


const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    for (let user of userResults) {
        const country = user.location.country;
        const name = user.name;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div")
        userDiv.innerHTML = `
        <h3>${name.first} ${name.last}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
        randomFolks.append(userDiv)
    }
}


selectUserNumber.addEventListener("change", function (event) {
    const numUsers = event.target.value
    getData(numUsers)
    
 })