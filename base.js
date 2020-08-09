(function(){
	// adds slider according to the number of itens that is already inside the carousel
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

const maxitems = 3;
$('.multi-item-carousel .item').each(function(){ //todo docfrag.queryselect
//for each item in carousel run this function
	var frag = $(document.createDocumentFragment());
	var next = $(this);
	for ( i = 1; i < maxitems; ++i ) {
		next = next.next();
		if (!next.length) { //if we dont have any more itens
			next = $(this).siblings(':first'); //set next item as first element
		}
		//clone content of the next/first inside item into the current item
		next.children(':first-child').clone().appendTo(frag);
	}
	$(this).append(frag);
	//next.children(':first-child').clone().appendTo($(this));
});

