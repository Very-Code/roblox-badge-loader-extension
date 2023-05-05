const TryAgain = setInterval(addIt, 1000);

function addIt(){
    if (document.getElementsByClassName("stack-list")) {
        document.getElementsByClassName("stack-list")[0].insertAdjacentHTML('afterend', '<button type="button" class="btn-full-width btn-control-sm ng-binding" onclick="buttonclick()" >See All</button>');
        clearInterval(TryAgain);  
    }
}
