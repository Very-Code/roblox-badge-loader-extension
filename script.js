var i = 0;
function buttonclick(){
    
    while (true) {
        
        setInterval(function(){
            document.getElementsByClassName("btn-full-width btn-control-sm ng-binding")[0].click();
        }, 10);
        i++
        if (i = 20) {            
            break;
        } 
    }
}