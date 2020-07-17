const panel = $(".panel");

onLoad = () => {
  panel.addClass("open");
  panel.animate({ opacity: 1 }, 1000);
};

window.addEventListener("DOMContentLoaded", onLoad);
