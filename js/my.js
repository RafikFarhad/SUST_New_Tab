$(document).ready(function() {
    var imageId = 5;
    var evaluate = false;
    chrome.storage.local.get(["imageId"], function(item) {
        imageId = item["imageId"];
        chrome.storage.local.set({"imageId": (Number(imageId)+1)%28}, function() {
            chrome.storage.local.get(["imageId"], function(item) {
                $('body').css('background-image', 'url("img/'+imageId+'.jpg")');
                evaluate = true;
            });
          });
    });
    if(!evaluate) {
        chrome.storage.local.set({"imageId": 0}, function() {
            chrome.storage.local.get(["imageId"], function(item) {
                $('body').css('background-image', 'url("img/'+0+'.jpg")');
                evaluate = true;
            });
          });
    }
    
    // if(imageId != null) {
    // }
    // else {
    //     imageId = 0;
    // }
    
    
    if(localStorage.getItem('test2'))
    {
        $('#greet').html(getGreet());        
    }
    else 
    {
        $('#greet').html(getForm());
    }

    
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