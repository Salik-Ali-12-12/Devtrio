function dark_mode() {
    let container = document.querySelector(".container");
    let top_bar = document.querySelector(".top_bar");
    let dark_mode = document.querySelector("#dark_mode");
    let light_mode = document.querySelector("#light_mode");
    let headings = document.querySelector("h1");
    let content = document.querySelector("#content");
    let light_content = document.querySelector("#light_content");
    let dark_content = document.querySelector("#dark_content");
    dark_mode.style.display = "none";
    light_mode.style.display = "inline";
    top_bar.style.backgroundColor = " black";
    content.style.backgroundColor = " black";
    dark_content.style.display = "inline";
    light_content.style.display = "none";
    dark_content.style.color = "white";
    headings.style.color = "white";
}
function light_mode() {
    let container = document.querySelector(".container");
    let top_bar = document.querySelector(".top_bar");
    let dark_mode = document.querySelector("#dark_mode");
    let light_mode = document.querySelector("#light_mode");
    let headings = document.querySelector("h1");
    let content = document.querySelector("#content");
    let light_content = document.querySelector("#light_content");
    let dark_content = document.querySelector("#dark_content");
    dark_mode.style.display = "inline";
    light_mode.style.display = "none";
    top_bar.style.backgroundColor = " white";
    content.style.backgroundColor = " white";
    dark_content.style.display = "none";
    light_content.style.display = "inline";
    dark_content.style.color = "black";
    headings.style.color = "black";
}