import fetch from "node-fetch";

// request joke from API
// getRequestParam - form request param as object
const getRequestParam = () => {
    const requestObj = {
        firstName: "John",
        lastName: "Doe",
        categories: ["nerdy", "explicit"]
    };
    return requestObj;
}

const buildRequestURL = (requestData) => {
    return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}
 
const requestJoke = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const joke = data.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

// procedural workflow

const processJokeRequest = async () => {
    const requestData = getRequestParam();
    const url = buildRequestURL(requestData);
    requestJoke(url);
}

processJokeRequest();