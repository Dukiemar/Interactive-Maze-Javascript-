
//page turns green when the puzzle is complete
var div;
var Y;
var X;

window.onload = function ()
{
	var puzzlearea = document.getElementById('puzzlearea');
	div = puzzlearea.getElementsByTagName('div');

	for (var i=0; i<div.length; i++)
	{
		div[i].className = 'puzzlepiece';
		div[i].style.left = (i%4*100)+'px';
		div[i].style.top = (parseInt(i/4)*100) + 'px';
		div[i].style.backgroundPosition= '-' + div[i].style.left + ' ' + '-' + div[i].style.top;

function moveleft(x,y)
{
	var numX = parseInt(x);
	var numY = parseInt(y);
	if (numX > 0)
	{
		for (var i = 0; i < div.length; i++) 
		{
		if (parseInt(div[i].style.left) + 100 == numX && parseInt(div[i].style.top) == numY)
		{
			return i;
		} 
	}
	}
	else 
	{
		return -1;
	}
}

function moveright (x, y) {
	var numX = parseInt(x);
	var numY = parseInt(y);
	if (numX < 300)
	{
		for (var i =0; i<div.length; i++){
			if (parseInt(div[i].style.left) - 100 == numX && parseInt(div[i].style.top) == numY) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}

function moveup (x, y) {
	var numX = parseInt(x);
	var numY = parseInt(y);
	if (numY > 0)
	{
		for (var i=0; i<div.length; i++)
		{
		if (parseInt(div[i].style.top) + 100 == numY && parseInt(div[i].style.left) == numX) 
		{
			return i;
		}
		} 
	}
	else 
	{
		return -1;
	}
}

function movedown (x, y)
{
	var numX = parseInt(x);
	var numY = parseInt(y);
	if (numY < 300)
	{
		for (var i=0; i<div.length; i++)
		{
		if (parseInt(div[i].style.top) - 100 == numY && parseInt(div[i].style.left) == numX) 
		{
			return i;
		}
		}
	}
	else
	{
		return -1;
	} 
}

X = '300px';
Y = '300px';

	
function movablepiece(position)
{
	if (moveleft(X,Y) == (position-1))
	{
		return true;
	}
	if (moveright(X,Y) == (position-1))
	{
		return true;
	}
	if (moveup(X,Y) == (position-1))
	{
		return true;
	}
	if (movedown(X,Y) == (position-1))
	{
		return true;
	}	
}

div[i].onmouseover = function()
{
	if (movablepiece(parseInt(this.innerHTML)))
	{
		this.style.color = "#006600";
		this.style.text="underline"
		this.style.border = "solid red";
	}
};
div[i].onmouseleave = function()
	{
		this.style.border = "solid black";
		this.style.color = "#000000";
		this.style.text="underline";
	};

div[i].onclick = function()
{
	if (movablepiece(parseInt(this.innerHTML)))
	{
	xchangePos(this.innerHTML-1);
	if (solved())
		{
			Winner();
		}
			return;
		}
	};
}

	
var shufflebutton = document.getElementById('shufflebutton');
shufflebutton.onclick = function()
{
	for (var i=0; i<300; i++)
	{
	var random = parseInt(Math.random()* 100) %4;
	if (random == 0)
	{
		var p = moveup(X,Y);
		if ( p != -1)
		{
			xchangePos(p);
		}
	}
	if (random == 1)
	{
		var p = movedown(X,Y);
		if ( p != -1) 
		{
			xchangePos(p);
		}
	}

	if (random == 2)
	{
		var p = moveleft(X,Y);
		if ( p != -1)
		{
			xchangePos(p);
		}
	}

	if (random == 3)
	{
		var p = moveright(X, Y);
		if (p != -1)
		{
			xchangePos(p);
		}
	}
}
};
};

function solved()
{
var flag = true;
for (var i = 0; i < div.length; i++) {
	var y = parseInt(div[i].style.top);
	var x = parseInt(div[i].style.left);

	if (x != (i%4*100) || y != parseInt(i/4)*100)
	{
		flag = false;
		break;
	}
	}
	return flag;
	}

function xchangePos (position) {
	var pos = div[position].style.top;
	div[position].style.top = Y;
	Y = pos;

	pos = div[position].style.left;
	div[position].style.left = X;
	X = pos;
}

function Winner()
{
	var background = document.getElementsByTagName('body');
	background[0].style.backgroundColor = "green";
	
}