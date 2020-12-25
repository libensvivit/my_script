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
        var item = responseObj.response.bazaar[0];
        print(name + ", " + item.cost + ", " + new Date().toLocaleTimeString(), "blue");
        if(item.cost <= name2ID(name).min && !history.includes(item.id)){
            //log("Found " + name + " at $" + numberWithCommas(item.cost) + ", " + new Date().toLocaleTimeString());

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