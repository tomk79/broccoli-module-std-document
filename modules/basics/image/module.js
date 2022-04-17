window.Px2BroccoliModuleStdDocument_ImageScope = function(imgElm){
    let scope = document.querySelector('.px2-image-scope');
    if( scope ){
        scope.remove();
    }
    let imgSrc = imgElm.src;
    let htmlSrc =
`<div class="px2-image-scope">
    <button type="button" class="px2-image-scope__close"></button>
    <div class="px2-image-scope__inner">
        <div class="px2-image-scope__img"><img src="${imgSrc}" alt="" /></div>
    </div>
</div>`;
    imgElm.outerHTML += htmlSrc;
    document.querySelector('.px2-image-scope__close').addEventListener('click', function(){
        document.querySelector('.px2-image-scope').remove();
    })
}
