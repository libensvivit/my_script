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

$("#item4255299 .box-title").text("Modified Box");
$("#item4255299 div:first").addClass('title-red').removeClass('title-black');
$("#personal-perks ul:first").text("");