console.log("wellcome to async  javascript ");

const posts = [
  { title: "being Murshid", body: " para one " },
  { title: "being Guru", body: " para two " },
];

const getPosts = (num) => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li class="saqi">${index}  ${post.title}  </li>`;
      output += 2 + num;
      //   console.log(index , post.body)
    });
    document.body.innerHTML = output;
  });
};

getPosts(12);

const Info = [
  {
    name: "muhammad saqlain",
    regno: "2020-kiu-bs2086",
    semester: "6th",
    subject: "computer science ",
  },
];
let output = "";

const getAllInfo = () => {
  setTimeout(() => {
    Info.forEach((infos) => {
      output += `<li>${infos.name} </li>
                <li> ${infos.regno} </li>
                <li> ${infos.semester} </li>
                <li> ${infos.subject} </li>
                                <li> ${infos.inComming} </li>

          `;
    });
    document.body.innerHTML = output;
  }, 1000);
};

function addNewInfo(post, getAllInfo) {
  console.log(post, "post");
  const newData = Info[0];
  newData.inComming = post;
  setTimeout(() => {
    Info[0] = newData;
    getAllInfo();
  }, 2000);
  console.log(Info, "infor");
  document.body.innerHTML = output;
}

addNewInfo("being murshid", getAllInfo);
