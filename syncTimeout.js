// This is the sync setTimeout since CPU is busy with syncsetTimeout func 

function syncSetTimeout(func, ms){
    const startTime = new Date();
    let curTime = new Date();

    while((curTime - startTime) < ms){
        curTime = new Date();
    }

    func();
}


console.log("----Hi This is the beginning of the program----")

syncSetTimeout(() => {
    console.log("This func was in call stack")
}, 3000);

for(let i = 0;i<10;i++){
    console.log("I am cpu intensive task")
}

console.log("----------End of the program---------")