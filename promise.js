console.log("wellcome to promise ");

const Info = [
  {
    fullname: "muhammad",
  },
  {
    fullname : "saqlain",
  },
];

const getAllInfo = () => {
  setTimeout(() => {
    let output = "";
    Info.forEach((infos) => {
      output += `<li>${infos.fullname} </li>
          `;
    });
    document.body.innerHTML = output;
  }, 1000);
};

function addNewInfo(post){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            Info.push(post)
            let erro = false
            if(!erro){
                resolve();
            }else{
                reject("some thing went wrong ")
            }
        }, 2000)
    })
}
// addNewInfo({fullname : "being murshid"}).then(getAllInfo).catch(err => console.log(err))


// const promise1 = new Promise.resolve("hello world ")
// const promise2 = 12;
// const promise3 = new Promise((resolve , reject)=> setTimeout (resolve , 2000 , "good Bye "));

// Promise.all([promise1, promise2,promise3]).then(value => console.log(value))




const promise4 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(rep => rep.json());
console.log(promise4)

function displayData(data){
    document.getElementById("demo").innerHTML=data
}

const prom = new Promise((resolve , reject)=>{
    let = 0 
    if(x==0){
        resolve("ok")
    }else{
        reject('error')
    }

})

prom.then(
    value => {displayData(value)};
    error => {displayData(error)}
)