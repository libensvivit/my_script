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