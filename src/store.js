/* store will need to include ...
more than the server, locally we'll need to store filter, error, and adding

expanded - boolean - expands bookmark to display the description, delete, and visit buttons

filter - number 1-5 filters bookmarks desplayed in DOM by minimum value selected

error - displays all !resp.ok messages and any server errors

adding - boolean - form to add new bookmark

const store = {
  bookmarks: [...],
  adding: true,
  error: null,
  filter: 0
};

bookmarks: [
    {
      id: '7ddr',
      title: 'Title 11',
      rating: 5,
      url: 'http://www.title11.com',
      description: 'lorem ipsum dolor',
      expanded: true
    }

The store is going to contain the formdata() for each bookmark object + expanded (boolean - local only) in bookmarks array 
the store will contain adding, error, and filter locally - referencing how the dom looks
*/

//let error = null;

const STORE = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0,
  addBookmark: function (bookmark) {
    bookmark.expanded = false;
    this.bookmarks.push(bookmark);
  },
  toggleExpansion: function (bookmarkID) {
    let bookmark = this.bookmarks.find((bm) => bm.id === bookmarkID);
    bookmark.expanded = !bookmark.expanded; //switches to opposite
  },
  deleteBookmark: function (id) {
    let index = this.bookmarks.findIndex((bm) => bm.id === id);
    this.bookmarks.splice(index, 1);
  },
}; 

export default STORE;
