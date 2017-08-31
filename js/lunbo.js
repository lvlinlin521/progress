/**
 * Created by Administrator on 2017/3/10.
 */
var oPrev = document.querySelector('.lvLbLeft>p');
var oNext = document.querySelector('.lvLbRight>p');
var oUl = document.querySelector('.lvLbBox>ul');
// console.log(oUl.children)

var defaultWidth = oUl.children[0].offsetWidth;
var iNow = 0; //当前第几张

//右侧点击
oNext.onclick = function () {
    // alert(1)
    iNow++;
    if(iNow == oUl.children.length-2){
        oUl.style.left = 0;
        iNow = 1;
    }
    move(oUl,{left: -iNow * defaultWidth})
}

oPrev.onclick = function () {
    iNow--;
    if(iNow == -1){
        oUl.style.left = -(oUl.children.length - 3) * defaultWidth + 'px';
        iNow = oUl.children.length - 4;
    }
    move(oUl,{left: -iNow * defaultWidth})
}