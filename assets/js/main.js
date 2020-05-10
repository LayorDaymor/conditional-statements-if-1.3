const greaterThen=()=>{
    event.preventDefault()
    let inputFeld=document.getElementById("input").value;
    let answPlace2=document.getElementById("answPlace");
    if (inputFeld>18) {
        answPlace2.innerHTML="Ja du Kannst Shisha rauchen"   
    }
    else {
        answPlace2.innerHTML="Nein du Kannst nicht Shisha rauchen geh mal weg du Sandelgesicht"   
 
    }
    }