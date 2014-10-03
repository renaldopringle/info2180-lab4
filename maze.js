"use strict";
$(document).ready(function() {
    var win = true;
    var start = false;
    
    var newgame = function() {
        start = true;
        updatestatus('Move your mouse over the "E" to win!');
        $("#start").click(function() {
            $("#maze .boundary").removeClass("youlose");
            updatestatus('Move your mouse over the "E" to win!');
            win = true;
        });
    };
    
    var boundary = function() {
        $(".boundary").mouseenter(function(){
            $("#maze .boundary").addClass("youlose");
            win = false;
        });
    };
    
    var endgame = function() {
        $("#end").mouseenter(function() {
            if (win) {
                start = false;
                /*alert("You win!");*/
                updatestatus("You win!");
            }else{
                start = false;
                /*alert("You lose!");*/
                updatestatus("You lose");
            }
        });
    };
    
    var nocheating = function() {
        if (start) {
            $("#maze").mouseleave(function() {
                $("#maze .boundary").addClass("youlose");
                /*alert("you lose");*/
                updatestatus("No cheating!");
            });
        }
    };
    
    var updatestatus = function(status) {
        $("#status").html(status);
    };
    
    $("#start").mouseenter(function() {
        
        newgame();
        boundary();
        endgame();
        nocheating();
        
    });
    
});
