const luckyCat = document.querySelector(".lucky-cat");
const bikeCat = document.querySelector(".bike-cat");
let luckyCatCounter = 0;
let bikeCatCounter = 0;

/* LUCKY CAT IMAGE
EventListener: On click of image increment counter and
update counter html ".cat-clicks"
*/
luckyCat.addEventListener('click', function(){
	const luckyCatClicks = document.querySelector(".lucky-cat-clicks");
  luckyCatCounter ++;
  luckyCatClicks.innerHTML = "Number Of Clicks: " + luckyCatCounter;
});

/* BIKE CAT IMAGE
EventListener: On click of image increment counter and
update counter html ".cat-clicks"
*/
bikeCat.addEventListener('click', function(){
	const bikeCatClicks = document.querySelector(".bike-cat-clicks");
  bikeCatCounter ++;
  bikeCatClicks.innerHTML = "Number Of Clicks: " + bikeCatCounter;
});