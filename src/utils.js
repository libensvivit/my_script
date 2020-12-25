function numberWithCommas(x){return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");}
function ID2api(id){return "https://api.torn.com/market/"+id+"?selections=bazaar&key="+API_KEY;}
function name2ID(name){return mapped[name];}
function sleep(ms){return new Promise(function(resolve){setTimeout(resolve,ms);})}
function print(str,col){
    //$("#log").append($("<div>").text(str).css("color",col));
    //var node = document.createElement("div");
    //node.appendChild(document.createTextNode('%c'+str,'background:white;color:'+col+';font-weight:bold'));
    //document.getElementById("log").appendChild(node);
    console.log('%c'+str,'background:white;color:'+col+';font-weight:bold');
}

function notify(name, item){
    GM_notification({
        title: name,
        text: item.quantity + " x $" + numberWithCommas(item.cost),
        timeout: 8000,
        silent: false,
        onclick: function(){
            window.open("https://www.torn.com/imarket.php#/p=market&cat=" + name2ID(name).cat, "_blank");
        }
    });
}

function checkItemByName(name){
    function processJSON_Response(responseObj){

        //log("[GET] " + name + ", " + new Date().toLocaleTimeString(), "blue");
        var item = responseObj.response.bazaar[0];
        log(name + "," + item.cost.toString());
        if(item.cost <= name2ID(name).min && !history.includes(item.id)){
            //log("Found " + name + " at $" + numberWithCommas(item.cost) + ", " + new Date().toLocaleTimeString());

            //window.open("https://www.torn.com/imarket.php#/p=market&cat=" + name2ID(name).cat, "_blank");
            history.push(item.id);
            notify(name, item);
        }
    }

    GM_xmlhttpRequest({
        method:         "GET",
        url:            ID2api(name2ID(name).id),
        responseType:   "json",
        onload:         processJSON_Response
    });
}

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