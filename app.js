let ToDo=[];

let req=prompt("enter your request please!!!!");

while(true){
    if(req=="quit")
    {
        console.log("You have quitted the ToDo app");
        break;
    }
    if(req=="list")
    {
        console.log("----------------------")
        console.log(ToDo);
        console.log("----------------------")
    }
    else if(req=="add")
    {
        let add=prompt("Enter task to add in the list")
        ToDo.push(add);
    }
    else if(req=="delete")
    {
        let ind=prompt("enter task index to delete the task");
        ToDo.splice(ind,1);
    }
    else{
        console.log("You have entered wrong request")
    }
    req=prompt("Enter your request!!!")
}