var readme = document.getElementById("readme");
var displayRM = 1;

function showRM()
{
    if(displayRM==0)
    {
        readme.style.display = 'none';
        displayRM = 1; 
    }
    else if(displayRM==1)
    {
        readme.style.display = 'block';
        displayRM = 0;
    }
}
var recycle = document.getElementById("recycle");
var displayRB = 1;
function showRB()
{
    if(displayRB==0)
    {
        recycle.style.display = 'none';
        displayRB = 1;
    }
    else if(displayRB==1)
    {
        recycle.style.display = 'block';
        displayRB = 0;
    }
}

setInterval(()=>{
    let hrs = document.getElementById("hrs");
    let mins = document.getElementById("mins");
    
    let time = new Date();
    
    hrs.innerHTML = time.getHours();
    mins.innerHTML = (time.getMinutes()<10?"0":"") + time.getMinutes();
}, 1000)

