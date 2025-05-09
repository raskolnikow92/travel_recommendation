const getContent = async() => {
    const result = await fetch("./travel_recommendation_api.json");
    const res = await result.json();
    console.log(res);
    return res;
}

const keywordSearch = async(keyword) => {
    const places = await getContent();
    const lowerKeyword = keyword.toLowerCase();
    let location;
    const targetDiv = document.getElementById("recommendations");
    if(lowerKeyword.includes("beach")){
        location = places.beaches;
    }else if(lowerKeyword.includes("countries") || lowerKeyword.includes("country")){
        location = places.countries;
    }else if(lowerKeyword.includes("temple")){
        location = places.temples;
    }
    if(location){
        targetDiv.innerHTML = location.map(element => {
            return `<div>
            <img src=${element.imageUrl} />
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