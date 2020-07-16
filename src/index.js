import $ from "jquery";
import "./index.css";
import handler from "./handler";
import api from "./api";
import store from "./store";
import list from "./list";

const main = function () {
  // add functions that need to be available upon page loading
  // should run a GET upon loading ... is that the same as render?
 handler.registerListeners();
  api
    .getBookmarks()
    .then((data) => {
        console.log(data);
        data.forEach(bookmark => store.addBookmark(bookmark))
        list.render();
    });
};

$(main);
