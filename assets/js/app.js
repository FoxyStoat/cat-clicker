const luckyCat = document.querySelector(".lucky-cat");
let counter = 0;

/* 
EventListener: On click of image increment counter and
update counter html ".cat-clicks"
*/
luckyCat.addEventListener('click', function(){
	const catClicks = document.querySelector(".cat-clicks");
  counter ++;
  catClicks.innerHTML = "Number Of Clicks: " + counter;
});