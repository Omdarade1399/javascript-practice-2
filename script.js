// promise//

function getData(dataId){
    return new Promise((resolve, reject) => {
     setTimeout(() =>{
         console.log("data", dataId);
           resolve("Success");
        }, 2000);
    });
}

getData(1).then((res) => {
    getData(2).then((res) => {
        getData(3).then((res) => {
            getData(4).then((res) => {
                console.log(res);
            });
        });
    });
});