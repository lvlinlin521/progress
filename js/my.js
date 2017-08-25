var aWrap=document.getElementById('lvXkBox');
var oRight=document.getElementById('lvSjRight');
var oLeft=document.getElementById('lvSjLeft');
var boxWrap=document.getElementById('lvBoxWrap');
// console.log(boxWrap.children.length)
    boxWrap.children[0].className='lvShow';
    aWrap.children[0].className='lvSjLeft';
  for(var i=0;i<aWrap.children.length;i++){
            aWrap.children[i].index=i;
            aWrap.children[i].onclick=function(){
                for(var j=0;j<boxWrap.children.length;j++){
                    boxWrap.children[j].className='lvHidden';
                    aWrap.children[j].className='lvSjRight';
                }
                aWrap.children[this.index].className='lvSjLeft';
                boxWrap.children[this.index].className='lvShow';
            }

}



//微信
// $(".wx,.weixin").hover(
//     function(){
//         $(this).find("img").show();
//     },
//     function(){
//         $(this).find("img").hide();
//     }
// )