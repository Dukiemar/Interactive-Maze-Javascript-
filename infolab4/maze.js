window.onload = function() {
    $("boundary1").onmouseover = overBoundary;
};

function overBoundary() {
    $("boundary1").style.backgroundColor = "red";
    $("boundary1").addClassName("youlose");
}

window.onload=function()
{
	var boundaries = $$("div#maze div.boundary");
	for (var i=0; i<boundaries.length;i++)
		{boundaries[i].onmouseover=overBoundary;
		}
};
function overBoundary()
{var boundaries =$$("div#maze div.boundary");
for (var i=0; i<boundaries.length;i++)
{boundaries[i].style.backgroundColor=red;

}}






