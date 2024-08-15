//  let tasks = ["go to gym" , "go to sleep" , "go to club"]
//  function add (){
//     let add = prompt("add tasks")
//     tasks.push(add)
//     console.clear()
//     tasks.forEach ((el,index)=>{
//         console.log(el)
//     })
//  }
//  function del (){
//     let del = +prompt("delete tasks index")
//     let final = del-1
//     tasks.splice(final,1)
//     console.clear()  
//     tasks.forEach ((el,index)=>{
//         console.log(el)
//     })
//  }
//  function edit (){
//     let edit = +prompt(" inter the index")
//     let tadeel = prompt("inter name of task")
//     let final = del-1
//     tasks.splice(final,1,tadeel)
//     console.clear()
//     tasks.forEach ((el,index)=>{
//         console.log(el)
//     })
//  }
 



let user = prompt ("Enter Your Govern")
 let tadeel = user.toLowerCase().trim()

switch (tadeel) {
    case "cairo":
        console.log ("خصم 20%")
        document.write ("خصم 20%")
        break;
        case "aswan":
            console.log ("خصم 30%")
            document.write ("خصم 30%")
            break;
        case "benisuef":
            console.log ("خصم 10%")
            document.write ("خصم 10%")
            break;
        case "alex":
            console.log ("خصم 5%")
            document.write ("خصم 5%")
            break;
        
        default:
            console.log ("لا يوجد خصم") 
            document.write ("لا يوجد خصم")
        break;
}





















