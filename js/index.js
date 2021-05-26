const randomFolks = document.querySelector(".random-peeps");


const getData = async () => {
    const usersReq = await fetch("https://randomuser.me/api?results=5")
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
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
        randomFolks.append(userDiv)
    }

}
getData()
