//import modules
import $ from "jquery";
import store from "./store";

// render/get bookmark list

const renderBookmark = function (bookmark) {
  console.log(bookmark);
  if (bookmark.expanded) {
    return `<div class="css-bookmark" data-item-id="${bookmark.id}">
    <h2>${bookmark.title}</h2>
    <p>${bookmark.rating}</p>
    <p>${bookmark.desc}</p>  
    <a href=${bookmark.url}>visit site</a>
    <button type='button' id='collapse'>-</button>
    <button type='button' id='js-edit-bookmark'>Edit Bookmark</button>
    <button type='button' id='js-delete-bookmark'>Delete Bookmark</button>
    </div>`;
  } else {
    return `<div class="css-bookmark" data-item-id="${bookmark.id}"><h2>${bookmark.title}</h2> 
      <p>${bookmark.rating}</p> 
      <button type='button' id='expand'>+</button></div>`;
  }
};

function renderNewBookmarkForm() {
  return `<form class="css-form" id="js-new-bookmark-form">
        <!-- this form could/should be generated using jQuery-->
        <fieldset>
            <legend>New Bookmark</legend>
            <label for="title">Title</label>
            <input type="text" name="title" id="js-bookmark-title-entry" placeholder="e.g., Google" required>
            <label for="url">Website URL</label>
            <input type="url" name="url" id="js-bookmark-url-entry" placeholder="https://www.google.com" required>
            <label for="desc">Description</label>
            <textarea name="desc" id="js-bookmark-description-entry" cols="20" required>"Please describe the site here"</textarea>
            <span class="star_ratings">
                <input type="radio" id="rating-1" name="rating" value="1" />
                <label for="rating-1">1</label>
                <input type="radio" id="rating-2" name="rating" value="2" />
                <label for="rating-2">2</label>
                <input type="radio" id="rating-3" name="rating" value="3" />
                <label for="rating-3">3</label>
                <input type="radio" id="rating-4" name="rating" value="4" />
                <label for="rating-4">4</label>
                <input type="radio" id="rating-5" name="rating" value="5" />
                <label for="rating-5">5</label>
            </span>
            <button type="submit">Create New Bookmark</button>
            <button type="button" id="cancel-button">Cancel</button>
        </fieldset>
    </form>`;
}

function addBookmarkButton() {
  return `<div id="css-add-button"> 
            <button id='add-button'>Add New Bookmark</button>
          </div>`;
}

function minRating() {
  let options = "";
  for (let i = 5; i > 0; i--) {
    let currentlySelected = i === store.filter;
    options += `<option value="${i}" ${
      currentlySelected ? "selected" : ""
    }> ${i} Stars</option>`;
  }
  return `<div>
            <label for="ratings">Minimum Rating</label>
            <select name="ratings" id="ratings-filter">
            ${options}
            </select>
          </div>`;
}

function errorTemplate() {
  return `<div id="css-error-message">
            <h2>Error</h2>
            <p>${store.error}</p>
          </div>`;
}

const render = function () {
  let html = "";
  if (store.adding) {
    html += renderNewBookmarkForm();
  } else {
    html += addBookmarkButton();
  }
  html += minRating();
  if (store.error) {
    html += errorTemplate();
  }
  let bookmarks = store.bookmarks;
  bookmarks = bookmarks.filter((bm) => bm.rating >= store.filter);
  let bookmarkHtml = bookmarks.map(renderBookmark).join("");
  html += bookmarkHtml;
  $("#main").html(html);
};

export default {
  render,
};

//function to expand bookmark item

//function to edit bookmark item

//function to delete bookmark item

// this module will also be used for how the page should look based on the add new and min rating listeners

//export functions
