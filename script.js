// callback hell//

function getData(dataId, genNextData){
     setTimeout(() =>{
         console.log("data", dataId);
            if(genNextData){
                genNextData();
            }
        }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5);
            });
        });
    });
}); 