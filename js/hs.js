    var oS=document.getElementById('lvBtnQa');
    var oB=document.getElementById('lvBtnQb');
    var oBig=document.getElementById('big');
    var arr=['../img/img_hunsha/lvChunv.png',
    '../img/img_hunsha/lvShizi.png',
    '../img/img_hunsha/lvShuangyu.png',
    '../img/img_hunsha/lvMoxie.png',
    '../img/img_hunsha/lvShuiping.png',
    '../img/img_hunsha/lvTian.png'

    ];
    var num=0;
    var oUl=document.getElementById('lvUls');
    var aLi=oUl.getElementsByTagName('li');
    oBig.src=arr[num];

    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].style.border='';
        aLi[i].onmouseover=function() {
            oBig.src = arr[this.index];
        }
    }
    this.className='click';


    oB.onclick=function(){
        num++;
        if(num==arr.length){
            num=0;}
        oBig.src=arr[num];
        for(var i=0;i<aLi.length;i++){
            aLi[i].style.border='';
        }
        aLi[num].style.border='2px solid #e10374';
    }


    oS.onclick=function(){
        num--;
        if(num==-1){num=arr.length-1;
        }
        oBig.src=arr[num];
        for(var i=0;i<aLi.length;i++){
            aLi[i].style.border='';}
        aLi[num].style.border='2px solid #e10374';
    }


var leftCount=document.querySelector('.leftCount');
var rightCount=document.querySelector('.rightCount');
var lvJtA=document.querySelector('#lvJtA');
var lvJtB=document.querySelector('#lvJtB');
lvJtA.onclick=function(){
      num--;
        if(num==-1){
            num=arr.length-1;
        }
        oBig.src=arr[num];
        for(var i=0;i<aLi.length;i++){
            aLi[i].style.border='';}
        aLi[num].style.border='2px solid #e10374'
        leftCount.innerHTML=num;
}

lvJtB.onclick=function(){
      num++;
        if(num==arr.length){ 
            num=0;
        }
        oBig.src=arr[num];
        for(var i=0;i<aLi.length;i++){
            aLi[i].style.border='';
        }
        aLi[num].style.border='2px solid #e10374';
        leftCount.innerHTML=num;

}