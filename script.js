const xhr = new XMLHttpRequest;

xhr.onload = function () {
    var data = JSON.parse(this.response);
    const movie_grid = document.getElementById('display-movies');
    movie_grid.innerHTML = ``;
    for (var i = 0; i < data.length; i++) {
        var newItem = document.createElement('img')
        newItem.src = data[i].show.image.medium;
        movie_grid.appendChild(newItem);
    }
    console.log(data);
}


document.getElementById('search-bar-btn').addEventListener('click', (e) => {
    let ele = document.getElementById('search-bar').value;
    document.getElementById('search-bar').value = "";
    const url = " https://api.tvmaze.com/search/shows?q=" + ele;
    xhr.open("GET", url);
    e.preventDefault();
    xhr.send();
})

var themeColors = Array.from(document.querySelectorAll('[name = "theme"]'));
const storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
}

const applyTheme = function () {
    const activeTheme = localStorage.getItem('theme');
    document.getElementById(activeTheme).checked = true;
    // changeFont();
}
themeColors.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    })
})
document.onload = applyTheme();
// function changeFont() {
//     var heading = document.getElementById('heading');
//     if (document.getElementById('light').checked === true) {
//         heading.style.color = "black";
//     }
//     if (document.getElementById('blue').checked === true) {
//         heading.style.color = "white";
//     }
//     if (document.getElementById('orange').checked === true) {
//         heading.style.color = "#e0e0e0";
//     }
//     if (document.getElementById('babyPink').checked === true) {
//         heading.style.color = "black";
//     }
//     if (document.getElementById('dark').checked === true) {
//         heading.style.color = "white";
//     }
// }