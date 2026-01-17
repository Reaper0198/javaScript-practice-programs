function fetchPromisified(url){
    return fetch(url)
}
function displayErrorMsg(error){
    console.log(error)
}

function responsePromisified(response){
    return response.json();
}

fetchPromisified('https://jsonplaceholder.typicode.com/posts/1')
.then(response => responsePromisified(response))
.then(data => console.log(data))
.catch(displayErrorMsg);

