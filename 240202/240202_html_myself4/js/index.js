function func(js) {
  big_img_id1.style.display = "none";
  big_img_id2.style.display = "none";
  big_img_id3.style.display = "none";
  this["big_img_id" + js].style.display = "block";
}
function sec(js) {
  secID0.style.display = "none";
  secID1.style.display = "none";
  secID2.style.display = "none";
  secID3.style.display = "none";
  secID4.style.display = "none";
  secID5.style.display = "none";
  secID6.style.display = "none";
  secID7.style.display = "none";
  this["secID" + js].style.display = "block";
}
function drop() {
  const drop = event.target;
  drop.style.transform = "translateY(100px)";

  drop.addEventListener(
    "transitionend",
    function () {
      drop.style.transform = "none";
    },
    { once: true }
  );
}
