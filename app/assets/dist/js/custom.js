/* 
ThemeChain - Token sale bootstrap One Page Parallax Template
Author - RCWEB-D
Project Version - v1.0
 */
// ### Countdown ###
$('#clock').countdown('2019/02/20').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    //+ '<span>%-w</span> week%!w '
    + '<span>%D</span>'
    + '<span>%H</span>'
    + '<span>%M</span>'
    + '<span>%S</span>'));
});

//### smooth scroll ###
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 800, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 73, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function (anchor, toggle) { } // Function to run after scrolling
    });

//### To play youtube/vimeo video in bootstrap modal ###

// Gets the video src from the data-src on each button

var $videoSrc;  
var $videoid; 
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
	$videoid = $(this).data( "vid" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#videoModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
	if ($videoid == 'youtube') {
		//alert($videoid);
   $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); // this is for youtube
}
if ($videoid == 'vimeo') {
	//alert($videoid);
   $("#video").attr('src',$videoSrc + "?autoplay=1&title=0&byline=0&portrait=0 ?autoplay=1&title=0&byline=0&portrait=0 hide" ); // this is for vimeo
}

})
  
  
// stop playing the youtube video when I close the modal
$('#videoModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
	$("#video").attr('src',$videoSrc); 
}); 

// ### Pie Chart Js ###
var canvas = document.getElementById("tokanDistChart");
var ctx = canvas.getContext('2d');

var data = {
    labels: ["PRESALE & ICO", "DEVS & ADVISORS", "DEVELOPMENT", "REWARDS POOL"],
   datasets: [{
            label: '# of Votes',
            data: [18, 20, 20, 42],
            backgroundColor: [
                '#007BC7',
                '#63FBD3',
                '#00BDDA',
                '#293388'
               
            ],
            borderColor: [
                '#FFFFFF'
               
            ],
            borderWidth: 1
        }]
};


var options = {
        legend: {
            display: false,           
        }
};
	var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: options
});

//### Owl carousel for Roadmap ###
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:130,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
});







