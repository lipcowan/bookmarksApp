// server will need to hold array of bookmark objects 

export default {getBookmarks, createBookmark, updateBookmark, deleteBookmark};

const userName = "lip"
const BASE_URL = `https://thinkful-list-api.herokuapp.com/${userName}/bookmarks`;


// pulled from the shopping-list api exercise, should be mostly the same

function apiCall(url, method = "GET", body) {
  return fetch(url, { method, body, headers: body ? {'Content-Type': 'application/json'} : undefined})
    .then(res => {
      if(!res.ok)
        throw Error(`${res.status} ${res.statusText}`);
      return res.json();
    });
}

function getBookmarks() {              
  return apiCall(`${BASE_URL}`);
}

function createBookmark(newBookmark) {
  return apiCall(`${BASE_URL}`, 'POST', JSON.stringify(newBookmark));
}

function updateBookmark(id, delta) {
  return apiCall(`${BASE_URL}/${id}`, 'PATCH', JSON.stringify(delta));
}

function deleteBookmark(id) {
  return apiCall(`${BASE_URL}/${id}`, 'DELETE');
} 