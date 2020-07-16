// add code in here for the new bookmark function(s) 
// function to handle new bookmark submission
/* bookmark data going to server is 
      "id": "8sdfbvbs65sd",
      "title": "Google",
      "url": "http://google.com",
      "desc": "An indie search engine startup",
      "rating": 4
    This is also all the formdata()
*/
import $ from 'jquery';
import api from "./api"
import store from "./store"
import list from './list'



function createBookmarkHandler() { 
    $('#main').on('submit', '#js-new-bookmark-form', event => {
        event.preventDefault();
        let bookmarkForm = document.querySelector('#js-new-bookmark-form');
        let formData = new FormData(bookmarkForm);
        let bookmarkData = {};
        for (let [key,value] of formData) 
            bookmarkData[key] = value;
        api.createBookmark(bookmarkData)
        .then(res => {
            store.addBookmark(res);
            store.error = null;
            list.render();
        })
        .catch(error => {
            store.error = error.message;
            list.render();
        });
    })
}

function cancelBookmarkForm() {
    $('#main').on('click','#cancel-button', event => {
        store.adding = false;
        list.render();
    })
}

function deleteBookmarkHandler() {
    $('#main').on('click','#js-delete-bookmark', event => {
        let id = $(event.currentTarget).closest('div').data('item-id');
        api.deleteBookmark(id);
        list.render();
    })
}

function toggleBookmarkForm() {
    $('#main').on('click','#add-button', event => {
        console.log('popup');
        store.adding = true;
        list.render();
    })
}

function collapseBookmark() {
    $('#main').on('click','#collapse', event => {
        let bookmarkID = $(event.currentTarget).closest('div').data('item-id')
        store.toggleExpansion(bookmarkID);
        list.render();
    })
}

function expandBookmark() {
    $('#main').on('click','#expand', event => {
        let bookmarkID = $(event.currentTarget).closest('div').data('item-id')
        store.toggleExpansion(bookmarkID);
        list.render();
    })
}

function filterRatings() {
    $('#main').on('change','#ratings-filter', event => {
        let rating = Number($('#ratings-filter').val());
        store.filter = rating;
        list.render();
    })
}


function registerListeners() {
    createBookmarkHandler();
    cancelBookmarkForm();
    toggleBookmarkForm();
    collapseBookmark();
    expandBookmark();
    filterRatings();
    deleteBookmarkHandler();
}

export default {
    registerListeners
}
 //export default { ... 
 
