(function(){
    "use strict";

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(event){
        var key = event.code; // piefiksē, kurš taustiņš ir nospiests

        if(key === "KeyK"){
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";  // change the heading
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles"; //change the intro paragraph 
        }
        else if(key === "KeyM"){
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";  // change the heading
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers"; //change the intro paragraph 
        }
    });

    form.addEventListener('submit',function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
    
        if(distance && convertType == 'miles'){
            const convMil = (distance * 1.609344).toFixed(3);
            answerDiv.innerHTML = `<h2>${distance} miles converts to ${convMil} kilometrs </h2>`;}
        
        else if(distance && convertType == 'kilometers'){
           const convKil = (distance * 0.621371192).toFixed(3);
            answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${convKil} miles </h2>`;}
        else{
            answerDiv.innerHTML = "<h2>Please provide a number!</h2>";
        }
    });

})();