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


const promise1 = new Promise.resolve("hello world ")
const promise2 = 12;
const promise3 = new Promise((resolve , reject)=> setTimeout (resolve , 2000 , "good Bye "));

Promise.all([promise1, promise2,promise3]).then(value => console.log(value))

