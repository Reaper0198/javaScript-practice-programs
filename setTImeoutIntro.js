console.log("hi this is the beginning of the program")

//This is async timeout
setTimeout(() => {
    console.log("i am async function. So i will run at last")
}, 2000);

for(let i = 0;i<5;i++){
    console.log("hi i am a cpu intensive task")
}
