$(document).ready(function(){

    //Show/Hide button
    $('.hide-show').click(function() {
        $('.tab-wrap').not('.hide-show').slideToggle();
    });

    //Tabs
     //When page loads...
    $('.tab-parent').each(function(){
        $(this).find(".tab-content").css({"position":"absolute","left":"-9999px","bottom":"0px"}); //Hide all content
        $(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
        $(this).find(".tab-content:first").css({"position":"inherit","left":"auto","bottom":"auto"}); //Show first tab content
    });

     //On Click Event
    $("ul.tabs li").click(function() {
        var parents = $(this).parentsUntil('.tab-parent').parent();
        $("li", parents).removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab-content", parents).css({"position":"absolute","left":"-9999px","bottom":"0px"}); //Hide all tab content

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).css({"position":"inherit","left":"auto","bottom":"auto"}); //Fade in the active ID content
        return false;
    });

    //Flexslider
     $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
        animationLoop: false,
        itemWidth: 100,
        animationSpeed: 1000,
        itemMargin: 5,
        prevText: "Prev",
        nextText: "Next"
     });

     $('img.toolbox-item').draggable({
         drag: function (event, ui) {
             //console.log(event);
         },
         revert: 'invalid',
         helper: 'clone'
     });
     $('#c').droppable({
         drop: function (event, ui) {
             AddImageToCanvas(ui.draggable.attr('src'), { top: ui.offset.top, left: ui.offset.left, name: ui.draggable.attr('data-name'), type: ui.draggable.attr('data-type') })
         },
         accept: function (el) {
             /* This is a filter function, you can perform logic here 
                depending on the element being filtered: */
             return el.is('img');
         }
     });
});