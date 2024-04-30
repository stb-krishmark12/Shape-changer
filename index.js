
   
  
    let count = 0;

   

 function counter(){
    var red= document.getElementById("red");
    var blue= document.getElementById("blue");
    var shape= document.getElementById("shape")

    var count_value= document.getElementById("count_value");
	count++;
	count_value.textContent = "Count = "+count;
    if(count%5==0){
        shape.style.borderRadius="50%";
        shape.style.height="100px";
        shape.style.width="100px";
        
    }
    else if(count%2==0){
        shape.style.borderRadius="0";
        shape.style.height="100px";
        shape.style.width="100px";
    }
    else{
        shape.style.borderRadius="0";
        shape.style.height="70px";
        shape.style.width="200px";
    }




// red.addEventListener('click', () => {
//     shape.style.backgroundColor="red";
// });

}

function colorchange(color){
    var shape= document.getElementById("shape")

    if(color=="red"){
        shape.style.backgroundColor="red";

    }
    if(color=="blue"){
        shape.style.backgroundColor="blue";
    }
    
}



function reset() {
    var shape= document.getElementById("shape")

    var count_value= document.getElementById("count_value");
    
	count = 0;
	count_value.textContent = "Count = 0";
    

}


function dark(){
 

        var element = document.body;
        element.classList.toggle("dark-mode");
      
}