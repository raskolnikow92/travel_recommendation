const getContent = async() => {
    const result = await fetch("./travel_recommendation_api.json");
    const res = await result.json();
    console.log(res);
    return res;
}

getContent()

const keywordSearch = async(keyword) => {
    const places = await getContent();
    const lowerKeyword = keyword.toLowerCase();
}