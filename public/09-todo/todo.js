const $todoList = [... document.getElementsByClassName('todo')];

$todoList.forEach(todo => {
    todo.addEventListener('mousedown',(event)=>{switchCheck(event.target,event.type)});
    todo.addEventListener('mouseup',(event)=>{switchCheck(event.target,event.type)});
    // todo.addEventListener('click',checkTodo);
    // todo.addEventListener('mouseup',log);
});
// .srcElement.parentElement()
function checkTodo(e) {
    console.log({e})

    const check = e.target.firstElementChild;

    if(!check.checked){
        console.log(check.checked);
        e.target.className = "todo hl";
        return check.checked=true;
        // checkState=true;
    }else{
        e.target.className = "todo";
        return check.checked=false;
        // checkState=true;
        
    }
    
    // console.log();
}
function checkDirectTodo(todoDiv){
    
    console.log("YouDiv");
    console.log();
    todoDiv.firstElementChild.checked =true;
}

let [startElement,finishElement]=" ";
function switchCheck(target,flag) {
    // console.log(target);
    console.log(target.attributes.class)

    if(target.attributes.class===undefined){
        console.log("I am runnig for target: ",{target})
        // target.firstElementChild.attributes.type!='checkbox'
        target= target.parentNode.parentElement;
    }else{
        target
    }
    if(flag==='mousedown'){
        startElement = target.firstElementChild;
        console.log(flag);
    } 
    if(flag==='mouseup'){
        finishElement = target;
        console.log(flag);
    }
    else{
        console.log(flag);
    }
    console.log({startElement,finishElement});
    // continue in 
    if(startElement === '<input type="checkbox">' && finishElement === '<input type="checkbox">' ){
        console.log("Switch"+startElement+" "+finishElement)
        console.log("Heey switch runs");
        // [startElement,finishElement]="";

        let startContinue = false;
        for (let i =0; i< $todoList.length; i++) {
            let todo = $todoList[i];
            if ((todo === startElement || todo === finishElement )) {
                startContinue = true;
                checkDirectTodo(todo);
                console.log("Setting true"+startContinue);
                continue;
                
            }else if((startContinue)){
                
                console.log("finishing loop");
                checkDirectTodo(todo);
            }
            else if(todo === startElement || todo === finishElement ){
                startContinue = false;
                break;

            }
    
        }
    }
        // if(todo==startElement){
        //     checkDirectTodo(todo);
        // }
        
    
}