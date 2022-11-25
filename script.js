const xhr = new XMLHttpRequest;

xhr.onload = function(){
    var data = JSON.parse(this.response);
    const movie_grid = document.getElementById('display-movies');
    movie_grid.innerHTML = ``;
    for(var i = 0; i < data.length; i++) {
        var newItem = document.createElement('img')
        newItem.src = data[i].show.image.medium;
        movie_grid.appendChild(newItem);
    }
    console.log(data);
}


document.getElementById('search-bar-btn').addEventListener('click',(e) => {
    let ele = document.getElementById('search-bar').value;
    const url = " https://api.tvmaze.com/search/shows?q=" + ele;
    xhr.open("GET",url);
    e.preventDefault();
    xhr.send();
})
