(function() {
  var menu = document.querySelector("aside .book-menu-content nav > ul");
  if (!menu) {
    return;
  }

  addEventListener("beforeunload", function(event) {
      localStorage.setItem("menu.scrollTop", menu.scrollTop);
  });
  menu.scrollTop = Number(localStorage.getItem("menu.scrollTop")) || 0;

  if (sessionStorage.getItem("book-search-selection") !== "true") {
    return;
  }

  sessionStorage.removeItem("book-search-selection");
  var activeLink = menu.querySelector("a.active");
  if (!activeLink) {
    return;
  }

  var menuBounds = menu.getBoundingClientRect();
  var activeBounds = activeLink.getBoundingClientRect();
  menu.scrollTop += activeBounds.top - menuBounds.top - (menu.clientHeight - activeBounds.height) / 2;
})();
