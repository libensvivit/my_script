function log(str,col){
    let item_wrap, date_wrap, price_wrap, style;
    if(str.slice(-1) == "."){
        $("#personal-perks ul:first").append($("<li tabindex='0'>").text(str).css({"padding-left":"10px","color":col,"font-weight":"bold"}));
    } else {
        item_wrap = $("<span id='name'>").text(str.split(",")[0]).css({"width":"150px","border-right":"1px solid gray"});
        price_wrap = $("<span id='price'>").text("$"+numberWithCommas(str.split(",")[1])).css({"width":"80px","border-right":"1px solid gray"});
        date_wrap = $("<span id='time'>").text(new Date().toLocaleTimeString()).css({"width":"90px","text-align":"center"});
        style = {"color":col,"font-weight":"bold"};
        $("#personal-perks ul:first").append($("<li tabindex='0'>").append(item_wrap).append(price_wrap).append(date_wrap)).css(style);
    }

    $("#personal-perks ul:first").animate({scrollTop: $('#personal-perks ul:first').prop("scrollHeight")}, 300);
    var count = $("#personal-perks ul:first li").length;
    if(count > 30) $('#personal-perks ul:first').find('li:lt(1)').remove();
}

$("#item4255299 .box-title").text("Modified Box");
$("#item4255299 div:first").addClass('title-red').removeClass('title-black');
$("#personal-perks ul:first").text("");

//log("YAY", "purple");
