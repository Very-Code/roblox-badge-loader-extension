var i = 0;
function buttonclick(){
    
    while (true) {
        
        setInterval(function(){
            document.getElementsByClassName("btn-control-md btn-full-width")[0].click();
        }, 10);
        i++
        if (i = 20) {            
            break;
        } 
    }
}
