var _STATUS = 0; // ON or OFF

$("body").append (`
<div id="container">
    <img id="pacman" src="https://i.ibb.co/4WmZXzv/2.png" alt="image" border="0">
    <div id="status">OFF</div>
    <div id="info"></div>
    <div id="gui-container"></div>
</div>
`);

GM_addStyle (`
#container{
    position: fixed;
    width: 13%;
    height: auto;
    left: 0%;
    top: 0%;
    font-weight: bold;
}

#pacman{
   position: relative;
   left: 50%;
   top: 5px;
   transform: translateX(-50%);
}

#status{
    position: relative;
    top: 15px;
    color: red;
    text-align: center;
}

#info{
    position: relative;
    top: 20px;
    text-align: center;
}

#gui-container{
    position: relative;
    top: 30px;
    height: 300px;
}

.gui-element{
    width: 100%;
}

.gui-item, .gui-price{
    width: 43%;
    margin-left: 5px;
    margin-bottom: 5px;
    display: inline-block;
}

`);

var intervalObj, historyObj;
$("#pacman").click(function(){
    if(_STATUS == 0){ // ACTIVATE
        _STATUS = 1;
        $("#status").text("ON");
        $("#status").css("color", "green");
        $("#info").text(Math.ceil(60/INTERVAL*Object.keys(mapped).length) + " calls/min");
        $("#pacman").attr("src","https://i.ibb.co/C86VQ4v/1.png");

        DOSTUFF();
        intervalObj = setInterval(DOSTUFF, INTERVAL*1000); log("API calls started.", "green");
        historyObj = setInterval(function(){ history = []; log("History cleaned.", "purple"); }, 60*1000);

        return true;
    }
    if(_STATUS == 1){ // DEACTIVATE
        _STATUS = 0; history = [];
        $("#status").text("OFF");
        $("#status").css("color", "red");
        $("#pacman").attr("src","https://i.ibb.co/4WmZXzv/2.png");

        clearInterval(intervalObj); print("API calls stopped.", "red");
        clearInterval(historyObj); history = []; print("History cleaned.", "purple");

        return true;
    }
});

data = [];

for(let i = 0; i < 5; i++){
    $("#gui-container")
        .append($("<div class='gui-element'>")
            .append($("<input class='gui-item'>").val("LOL"))
            .append($("<input class='gui-price'>"))
        );
}

$(".gui-item").each(function(index, element){
    console.log($(this).val());
});