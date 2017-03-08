/**
 * Created by hanshaojie-pc on 2017/3/8.
 */
var oArea,oBtn, oBox;
window.onload=function(){
    oArea=document.getElementById("area");
    oBtn=document.getElementById("rel");
    oBox=document.getElementById("box");
    oArea.focus();
    document.onkeydown= function (e) {
        var e=e || window.event;
        if(e.keyCode==13){
            fabu();
        }
    }
};
function fabu() {
    var txt=oArea.value;
    oArea.value="";
    oArea.focus();
    if(txt!=""){
        var oDiv=document.createElement("div");
        oDiv.innerHTML=txt;
        if(oBox.childNodes.length>0){
            oBox.insertBefore(oDiv,oBox.childNodes[0]);
        }
        else
        {
            oBox.appendChild(oDiv);
        }
        var oDivHeight=oDiv.offsetHeight;
        oDiv.style.height=0;
        startMove(oDiv,{height:oDivHeight});
    }
}