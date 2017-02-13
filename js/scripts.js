var n = 10; //squares in one row
var m = 100; //number of squres

for (var i = 0; i < m; i++ )
{
	$( "body" ).append( "<div class='square'></div>" );
}
	
var length = $(window).width() / n + 'px';

$( ".square" ).width(length);
$( ".square" ).height(length);
$( ".square" ).css("display", "inline-block");

for (var i = 0; i < m; i++ )
{
	$(".square")[i].style.backgroundColor = getRandomColor();
}

setInterval(function(){
				for (var i = 0; i < m; i++ )
				{
					$(".square")[i].style.backgroundColor = getRandomColor();
				}
			}, 1000);
  

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}