$(document).ready(function() {

  $('#drawButton').click(function(){

        //gather data from select boxes
        var percentRed = $('select[name=redData]').val();
        var percentBlue = $('select[name=blueData]').val();
        var percentYellow = $('select[name=yellowData]').val();
        var percentGreen = $('select[name=greenData]').val();

        //animate
        $('#red').animate ({
           height: '+=' + percentRed + 'px'
       },'slow');
        $('#blue').animate ({
           height: '+=' + percentBlue + 'px'
       },'slow');
        $('#yellow').animate ({
           height: '+=' + percentYellow + 'px'
       },'slow');
        $('#green').animate ({
           height: '+=' + percentGreen + 'px'
       },'slow');

        $('form').remove();
    });

   $('#hoverLove').mouseenter(function() {
       $('#hirling').addClass('go');
       $('#hirling').append('<P id="doIt">you will hire me</p>');
   });
   $('#hoverLove').mouseleave(function() {
       $('#hirling').toggleClass('go');
       $('#doIt').remove();
   });
});