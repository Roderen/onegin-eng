document.querySelector('.burger-btn').addEventListener('click', () => {
	var win = document.querySelector('.burger');
	var body = document.querySelector('body');
	var html = document.querySelector('html');
	if (win.classList.contains('burger-active')) {
		win.classList.remove('burger-active');

	} else {
		win.classList.add('burger-active');
	}
});




$('.slides').slick({
  centerMode: true,
  centerPadding: '230px',
  slidesToShow: 1,
  swipe: false,
  nextArrow:
  '<img class="slider-arrows slider-arrows__next" src="img/slider/right.svg">',
  prevArrow:
  '<img class="slider-arrows slider-arrows__prev" src="img/slider/left.svg">',
  responsive: [
    {
      breakpoint: 1921,
      settings: {
        centerPadding: '230px'
      }
    },
    {
      breakpoint: 1681,
      settings: {
        centerPadding: '160px'
      }
    },
    {
      breakpoint: 1601,
      settings: {
        centerPadding: '130px'
      }
    },
    {
      breakpoint: 1441,
      settings: {
        centerPadding: '80px'
      }
    },
    {
      breakpoint: 1361,
      settings: {
      centerMode: false
      }
    },
  ]
});


$('.developer-slides').slick({
  infinite: false,
  slidesToShow: 1,
  dots: true,
  dotsClass: "developer-dots",
});


$('.dynamic-cards').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  dotsClass: "dynamic-dots",
  variableWidth: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});