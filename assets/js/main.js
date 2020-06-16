const panels = $(".panel");

onLoad = () => {
  panels.addClass("open");
  panels.animate({ opacity: 1 }, 1000);
};

window.addEventListener("DOMContentLoaded", onLoad);
