/*!
=========================================================
* Dorang Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

 // toggle 
$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

$(function() {

    new Slider({
        images: '.slider-1 img',
        btnPrev: '.slider-1 .buttons .prev',
        btnNext: '.slider-1 .buttons .next',
        auto: false
    });

  new Slider({
        images: '.slider-2 img',
        btnPrev: '.slider-2 .buttons .prev',
        btnNext: '.slider-2 .buttons .next',
        auto: true,
        rate: 2000
    });
});


function Slider(obj) {

  this.images = $(obj.images);
  this.auto = obj.auto;
  this.btnPrev = obj.btnPrev;
  this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;

  var i = 0;
    var slider = this;

    // The "Previous" button: to remove the class .shoved, show the previous image and add the .shoved class
  this.prev = function () {
    slider.images.eq(i).removeClass('shown');
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images.eq(i).addClass('shown');
  }

    // The "Next" button: to remove the class .shoved, show the next image and add the .shoved class
  this.next = function () {
    slider.images.eq(i).removeClass('shown');
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images.eq(i).addClass('shown');
  }

    // To add next and prev functions when clicking the corresponding buttons
    $(slider.btnPrev).on('click', function(){ slider.prev();});
    $(slider.btnNext).on('click', function(){ slider.next();});

    // For the automatic slider: this method calls the next function at the set rate
  if (slider.auto)  {
        setInterval(slider.next, slider.rate);
    }
};
