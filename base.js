(function(){
	c = document.getElementById("showoff");
	l = c.getElementsByClassName("carousel-item").length;
	var sliderbtn = document.createDocumentFragment();
	var f = document.createElement("li");
	f.setAttribute("class", "active");
	f.setAttribute("data-slide-to", "0");
	f.setAttribute("data-target", "#showoff");
	sliderbtn.appendChild(f);
	for( i = 1; i < l; ++i ) {
		f = document.createElement("li");
		f.setAttribute("data-slide-to", i);
		f.setAttribute("data-target", "#showoff");
		sliderbtn.appendChild(f);
	}
	c.getElementsByClassName("carousel-indicators")[0].appendChild(sliderbtn);
})();

$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item. 

var maxitems = 3;
//refactor each to run inside each .multi.. .item inside carousel docfrag
$('.multi-item-carousel .item').each(function(){ //todo docfrag.queryselect
//for each item in carousel run this function
//That is the reason why it runs 7 times and doesnt run anymore
//It probably changes the way carousels work, but what keeps running is the carousel js
	var frag = $(document.createDocumentFragment());
	var next = $(this);
	for ( i = 1; i < maxitems; ++i ) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first'); //set as first element
		}
		//clone content of the next/first inside item into the current item
		next.children(':first-child').clone().appendTo(frag);
	}
	$(this).append(frag);
	//next.children(':first-child').clone().appendTo($(this));
});

