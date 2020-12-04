
var z="";
var a=0;
var flag=0;

function stringCheck()
{   let string1=document.getElementById("testString").innerHTML;
    a=a+1;
    let y=document.getElementById("inputText");
    let string2=y.value;
    let length2=string2.length;
    let sub1=string1.substring(0,length2);
    let sub2=string2.substring(0,length2);
    if (sub1!=sub2)
    {
    	y.style.color="red";
    }
    else
    {
    	y.style.color="green";
    }
    if(string1==string2)
    {
    	clearInterval(z);
    	document.getElementById("inputText").style.display="none";
    	document.getElementById("typeBelow").style.display="none";
    	speedCompute();
    	flag=1;
    }
    document.getElementById("timer").innerHTML=a+" s";
}

function buttonClick()
{
	a=0;

   	document.getElementById("typeBelow").style.display="block";
	document.getElementById("displayResult").style.display="none";
	if (flag==1)
	{
		location.reload();
	}
	document.getElementById("inputText").value="";
	clearInterval(z);
	z=setInterval(stringCheck, 1000);
}

function speedCompute()
{
	document.getElementById("displayResult").style.display="block";
	let mint=a/60;
	let word=38/mint;
	word=Math.ceil(word);
	document.getElementById("displaySpeed").innerHTML="Speed = "+word+" w/m";
}