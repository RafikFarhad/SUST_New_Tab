$(document).ready(function() {

    if(localStorage.getItem('imageId')) {
        var imageId = localStorage.getItem('imageId');
        localStorage.setItem('imageId', (Number(imageId)+1)%28);
    }
    else {
        localStorage.setItem('imageId', (Math.round(Math.random()*100))%27);
        var imageId = localStorage.getItem('imageId');
    }

    $('body').css('background-image', 'url("img/'+imageId+'.jpg")');
    if(localStorage.getItem('test2'))
    {
        $('#greet').html(getGreet());        
    }
    else 
    {
        $('#greet').html(getForm());
    }

    console.log("Ready on: " + imageId);
    $("#name-form").submit(function(e){
        console.log($('#name').val());
        localStorage.setItem('test2', $('#name').val());
        $('#greet').html(getGreet());
        return false;
    });
});
// num=0; for i in *; do mv "$i" "$(printf '%d' $num).${i#*.}"; ((num++)); done


function getForm() {
    var ret = '<form action="" id="name-form">' + 
    '<input type="text" id="name" placeholder="What is your name?" required> <br>' + 
    '<button type="submit" class="button" id="submitButton">Save</button>' +
    '</form>';
    return ret;
}

function getGreet() {
    var myDate = new Date();
    var name = localStorage.getItem('test2');
    if(name==null) 
        name = "";
    else name = ', ' + name;
    var ret = "";
    if (myDate.getHours() < 12) {
        ret = "Good Morning" +name ;
    }
    else if(myDate.getHours() >=12 && myDate.getHours() <=17){
        ret = "Good Afternoon" +name ;
    }
    else if (myDate.getHours() > 17 && myDate.getHours() <=24) {
        ret = "Good Evening" +name ;
    }
    else
    {
        ret = "Good Night" + name ;
    }
    return ret;
}