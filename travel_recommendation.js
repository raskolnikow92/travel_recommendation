const getContent = async() => {
    const result = await fetch("./travel_recommendation_api.json");
    const res = await result.json();
    console.log(res);
    return res;
}

const keywordSearch = async(keyword) => {
    const places = await getContent();
    const lowerKeyword = keyword.toLowerCase().trim();
    let location;
    const targetDiv = document.getElementById("recommendations");
    if(lowerKeyword.includes("beach")){
        location = places.beaches;
    }else if(lowerKeyword.includes("countries") || lowerKeyword.includes("country")){
        location = places.countries[0].cities;
    }else if(lowerKeyword.includes("temple")){
        location = places.temples;
    }
    if(location){
        targetDiv.innerHTML = "";
        targetDiv.innerHTML = location.map(element => {
            return `<div>
            <img class="img-thumbnail" src=${element.imageUrl} />
            <p>${element.name}</p>
        </div>`  
        }).join("")
    }
}

const searchButton = document.getElementById("submitBtn");
const searchHandler = (event => {
    event.preventDefault();
    keywordSearch(document.getElementById("searchInput").value);
})
searchButton.onclick = searchHandler;

const clearBtn = document.getElementById("clearBtn");
const clearHandler = (event => {
    event.preventDefault();
    const targetDiv = document.getElementById("recommendations");
    targetDiv.innerHTML = "";
})
clearBtn.onclick = clearHandler;