const {readFile, writeFile} = require("fs")

// let first;

// readFile("./content/first.txt", "utf8", (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
//     first = result
// })

// console.log(first)

// setTimeout(()=>{
//     console.log(first)
// },1000)


//+++++++++++++++++++++++++++++++++++
// concatenate two file in one

readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err)return;
    const first = result
    
    readFile("./content/second.txt", "utf8", (err, result)=>{
        if(err)return;
        const second = result

        writeFile("./content/concat-async.txt",
        `The finally file is: ${first}, ${second} \n`, 
        {flag:"a"},
        (err, result)=>{
            if(err)return;
        })
    })
} )