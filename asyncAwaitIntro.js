/*
points to remember
- await is used where the async op starts and promise is returned
- await make the func to stop there and wait till async op finishes
- so always use await after cpu busy task to avoid above point
- 3 awaits will stop the function 3 time so use Promise.all() to run all async op parellely
- above point is valid only if all awaits are independent of each other.

*/

function setTimeoutPromisified(ms){
    return new Promise( (resolve) => setTimeout(resolve, ms))
}

async function func(){
    console.log("----------start---------")
    for(let i = 0;i<3;i++){
        console.log("CPU heavy task!!")
    }

    await setTimeoutPromisified(1000)
    console.log('hi')

    await setTimeoutPromisified(3000)
    console.log('hello')

    await setTimeoutPromisified(4000)
    console.log('hello there')
    
    for(let i = 0;i<3;i++){
        console.log("CPU heavy task 4!!")
    }
    console.log('-----------end--------')
}

func()
