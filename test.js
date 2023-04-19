import fetch from "node-fetch";
// const fetch = import ('node-fetch');

const fetchRequest = async () =>{
    const data = await fetch('http://localhost:8080', {method: 'GET'})
    return data;
}


const start = Date.now();

for(var i=0; i<10000000; i++){

    fetchRequest().then((res) => {
        res.json().then((data) => {
            console.log(data)
            console.log(i)
        })
    }).catch((err)=> console.log(err));   
}

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);