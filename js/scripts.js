jQuery(document).ready(function($){
    $("button").click(function() {
        // change boxes to red color
        if (this.id == "redBoxButton") {
            $(".color-box").css({ background: "red"});
        }
        // change boxes to green color
        else if (this.id == "greenBoxButton") {
            $(".color-box").css({ background: "green"});
        }
         // change boxes to blue color
        else if (this.id == "blueBoxButton") {
            $(".color-box").css({ background: "blue"});
        }
         //reset all boxes 
        else if (this.id =="whiteBoxButton") {
            $("#redBox").css({ background: "red"});
            $("#greenBox").css({ background: "green"});
            $("#blueBox").css({ background: "blue"});
        }
    });
});