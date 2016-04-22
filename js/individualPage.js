var name2 = localStorage.getItem("clicked");
flattyShadow();
$(document).ready(function() {
    //loader function (cool)
    $(".loader").delay(500).fadeOut("slow");
    $(".loader-img").delay(3000).fadeOut();
	//if item added, button says remove, else says add
    checkButton();
	//add button click event, call addToWatchList(name2) method
    $('body').on('click', '#add', function() {
        addToWatchlist(name2);
    });
	//handles chosen page menu aka menu darker color
    $(this).find("#" + name2).addClass("active");

	//conditionals to decide unique color to each page
    if (name2 == "gold") {
        color = "color1";
    } else if (name2 == "silver") {
        color = "color2";
    } else if (name2 == "platinum") {
        color = "color3";
    } else if (name2 == "copper") {
        color = "color4";
    }
	//apply color + title to page to be displayed
    $(this).find('#title').addClass(color);
    $(this).find('#title').text(name2);
});

/*
Code Indented 
fully commented
divided in smaller functions to aid understanding of overall javascript workings
"Seeing the forest by the trees"
*/

function checkButton() {
    if (checkInLocalStorage() == false) {
        //Item does not exist, display + add
        $("#add").text("Add to WatchList");
        return false;
    } else {
        //item exists, display - remove
        $("#add").text("Remove from WatchList");
        return true;
    }


}




//function checks if item exists + return true or false
function checkInLocalStorage() {
    if (localStorage.getItem("" + name2) == "yes") {
        return true;
    } else {
        return false;
    }
}

// Use localstorage to store array 
function addToWatchlist(name) {
	//If browser is ok to use localstorage
    if (typeof(Storage) !== "undefined") {

        /* Check if item passed as parameter exists in localStorage
		   using a checkInLocalStorage() which returns T/F           */
		
        if (checkInLocalStorage() == true) {
            result = "<i>" + name + " </i> was removed from your watchList"//removed msg
            localStorage.setItem(name, "no");//no means not in Local Storage
        }
      
        else {
            //item will be added + msg to inform user
            result = "<i>" + name + " </i> successfully added to your watchList!"; //added msg

            //Save it to localstorage		
            localStorage.setItem(name, "yes"); // 
        }
    }
    //If user uses poor browser, display error msg
    else {
        result = "Your browser does not support storage!!";
    }
    //Set info div text(inner html) to whatever msg results from process
    checkButton();
    document.getElementById("info").innerHTML = result;

    // jquery animation to be used on msg
    $('#information').toggle(500); //show
    setTimeout(hide, 3000); //hide
}

//hide msg
function hide() {
    <!-- Hide animation -->
    $('#information').toggle(500);
}