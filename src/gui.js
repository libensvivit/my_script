var _STATUS = 0; // ON or OFF

$("body").append (`
<div id="container">
    <img id="pacman" src="https://i.ibb.co/4WmZXzv/2.png" alt="image" border="0">
    <p id="status">OFF</p>
    <p id="info"></p>
    <p id="log"></p>
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
    user-select: none;
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

#log{
    position: relative;
    top: 25px;
    left: 5px;
    font-size: 8pt;
    width: auto;
}

`);

var intervalObj;
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