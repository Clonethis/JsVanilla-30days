const $todoList = [... document.getElementsByClassName('todo')];

$todoList.forEach(todo => {
    todo.addEventListener('click',checkTodo);
    todo.addEventListener('mousedown',(event)=>{switchCheck(event.target,event.type)});
    todo.addEventListener('mouseup',(event)=>{switchCheck(event.target,event.type)});
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
}
function checkDirectTodo(todoDiv){
    
    console.log("YouDiv");
    console.log();
    todoDiv.firstElementChild.checked =!todoDiv.firstElementChild.checked;
}

let [startElement,finishElement]=" ";
function switchCheck(target,flag) {

    console.log(target.attributes.class)

    if(target.attributes[0].type==='checkbox'){
        console.log("I am runnig for target: ",{target})
        target= target.parentNode.parentElement;
    }else{
        target
    }
    if(flag==='mousedown'){
        console.log("mousedown "+flag);
        startElement = target;
    } 
    if(flag==='mouseup'){
        console.log("Mouseup "+flag);
        finishElement = target;
        console.log(flag);
    }
    else{
        console.log(flag);
    }
    console.log({startElement,finishElement});
    // continue in 
    try{
        if(finishElement!=undefined){
            if(startElement.classList[0]==="todo" && finishElement.classList[0]==="todo" ){
                console.log("Switch"+startElement+" "+finishElement)
                console.log("Heey switch runs");
                // [startElement,finishElement]="";
        
                let startContinue = false;
                for (let i =0; i< $todoList.length; i++) {

                    let todo = $todoList[i];
                    console.log(todo);
                    if ((todo === startElement || todo === finishElement )) {
                        if(startContinue){
                            checkDirectTodo(todo);
                            break;
                        }
                        startContinue = true;
                        checkDirectTodo(todo);
                        console.log("Setting: "+startContinue);
                        continue;
                        
                    }
                    if((startContinue)){
                        
                        console.log("finishing loop");
                        checkDirectTodo(todo);
                }
                }
            }
        }
    }catch{
        setTimeout((e)=>console.log("wait"),100)
    }
    
        // if(todo==startElement){
        //     checkDirectTodo(todo);
        // }
        
    
}
()=>{
    
}