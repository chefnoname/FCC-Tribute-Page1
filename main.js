$(".carousel").slick({
  vertical: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  arrows: false,
});

let title = document.querySelector(".title");
let makkah = document.querySelector(".makkah");
let aqsa = document.querySelector(".aqsa");
let quba = document.querySelector(".quba");
let medina = document.querySelector(".medina");

const showTitle = () => {
  setTimeout(() => {
    title.classList.remove("hideTitle");
  }, 4300);

  setTimeout(() => {
    makkah.classList.remove("hidePics");
  }, 1000);

  setTimeout(() => {
    aqsa.classList.remove("hidePics");
  }, 1500);

  setTimeout(() => {
    quba.classList.remove("hidePics");
  }, 2000);

  setTimeout(() => {
    medina.classList.remove("hidePics");
  }, 2500);
};

const zoom = () => {
  setTimeout(() => {
    makkah.classList.add("zoomedPic");
  }, 7000);

  setTimeout(() => {
    aqsa.classList.add("zoomedPic");
  }, 8700);

  setTimeout(() => {
    quba.classList.add("zoomedPic");
  }, 11000);

  setTimeout(() => {
    medina.classList.add("zoomedPic");
  }, 11000);
};

if (sessionStorage.getItem("sameSession") === null) {
  showTitle();
  zoom();

  sessionStorage.setItem("sameSession", 1);
} else {
  title.classList.remove("hideTitle");

  makkah.classList.remove("hidePics");
  aqsa.classList.remove("hidePics");
  quba.classList.remove("hidePics");
  medina.classList.remove("hidePics");

  makkah.classList.remove("zoomedPic");
  aqsa.classList.remove("zoomedPic");
  quba.classList.remove("zoomedPic");
  medina.classList.remove("zoomedPic");
}
