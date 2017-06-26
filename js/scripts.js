$(function () {
    let idCount = 0;
    let zCount = 0;
    
    $('.wrapper').click( function(e){
        $('.wrapper').append(`<div id="${idCount}" class="ball"></div>`);
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        let topPos = e.pageY - 25,
            leftPos = e.pageX - 25;
        
        let styles = {
            'z-index' : zCount,
            'position' : 'absolute',
            'top' : `${topPos}px`,
            'left' : `${leftPos}px`,
            'background-color' : randomColor
        };
        
        $(`#${idCount}`).css( styles );
        ++zCount;
        ++idCount;
    } );
});