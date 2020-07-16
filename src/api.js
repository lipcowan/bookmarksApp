// server will need to hold array of bookmark objects 

export default {getItems, createItem, updateItem, deleteItem};

const userName = "lip"
const BASE_URL = `https://thinkful-list-api.herokuapp.com/${userName}/bookmarks`;

function apiCall(url, method = "GET", body) {
  return fetch(url, { method, body, headers: body ? {'Content-Type': 'application/json'} : undefined})
    .then(res => {
      if(!res.ok)
        throw Error(`${res.status} ${res.statusText}`);
      return res.json();
    });
}

function getItems() {
  return apiCall(`${BASE_URL}/items`);
}

function createItem(name) {
  let newItem = {name};
  return apiCall(`${BASE_URL}/items`, 'POST', JSON.stringify(newItem));
}

function updateItem(id, delta) {
  return apiCall(`${BASE_URL}/items/${id}`, 'PATCH', JSON.stringify(delta));
}

function deleteItem(id) {
  return apiCall(`${BASE_URL}/items/${id}`, 'DELETE');
} 