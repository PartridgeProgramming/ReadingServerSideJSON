const showTeas = async () => {
    const teaJSON = await getJSON();
    if (teaJSON == "") {
        return;
    }
    let teaDiv = document.getElementById("tea-list");

    teaJSON.forEach((teas) => {
        let section = document.createElement("section");
        teaDiv.append(section);
        
        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = teas.name + " tea";
        
        let img = document.createElement("img");
        section.append(img);
        img.src = "https://serversidejson.onrender.com" + teas.img;
        img.width = 300;
        img.height = 300;

        let p = document.createElement("p");
        section.append(p);
        p.innerHTML += "<b>Caffeine ranges:</b> " + teas.caffine + `<br>`;
        p.innerHTML += "<b>Flavor:</b> " + teas.flavor + `<br>`;
        p.innerHTML += "<b>Aroma:</b> " + teas.aroma + `<br>`;
        p.innerHTML += "<b>Common varieties:</b> " + teas.varieties + `<br>`;

        
    });
};

const getJSON = async () => {
    try {
        let response = await fetch("http://localhost:3000/api/teas");
        return await response.json();
    } catch(error) {
        console.log("There was an error with fetching the JSON.")
        return "";
    }
};
window.onload = () => {
    showTeas();
};