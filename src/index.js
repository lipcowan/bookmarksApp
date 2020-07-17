import $ from "jquery";
import "./index.css";
import handler from "./handler";
import api from "./api";
import store from "./store";
import list from "./list";

const main = function () {
  handler.registerListeners();
  api.getBookmarks().then((data) => {
    console.log(data);
    data.forEach((bookmark) => store.addBookmark(bookmark));
    list.render();
  });
};

$(main);
