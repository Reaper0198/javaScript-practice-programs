function doThis() {
    console.log('inside callback func')
    console.log("promise was successfull");
}

function displayErrorMsg(msg){
    console.log(msg);
}

let err = true;

function setTimeoutPromisified(ms){

    console.log('inside setTimeoutPromisified func');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("inside set timeout func")
            if(err){
                console.log('some error occured');
                reject("Oopsies");
            }else{
                console.log('no error occured')
                resolve();
            }
        }, ms);
    });
}

setTimeoutPromisified(4000).then(doThis).catch(displayErrorMsg);