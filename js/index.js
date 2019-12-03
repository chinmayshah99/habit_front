
function days_left() {

    // var start = Date($.now())
    // var date1 = start.getDate();
    // console.log(start)
    // // return 31-parseInt(date1);
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    stringer = 31-parseInt(dd);
    document.getElementById('dater').innerHTML = (stringer);
}



    // $(function() {
    //     console.log( "ready!" );
    // });

$(document).ready(function(){
    // jQuery methods go here...
    console.log('hello')
    days_left()
});