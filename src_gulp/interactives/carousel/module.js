window.addEventListener('load', function(e){
	var carouselModules = document.querySelectorAll('.px2-carousel');
	for(var idx = 0; idx < carouselModules.length; idx ++){
		// console.log(idx);
	}
	tns({
		container: '.px2-carousel .tns-outer',
		items: 1,
		slideBy: 'page',
		nav: true,
		controlsText: ['＜', '＞'],
		autoplay: true,
		autoplayHoverPause: true,
		autoplayButtonOutput: false,
		lazyload: true,
		nested: 'inner'
	});
});
