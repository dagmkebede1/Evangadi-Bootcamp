let render = document.getElementById("render");
let btn = document.getElementById("btn");

async function fetchData() {
  let url = "http://localhost:5000/data";

  let res = await axios.get(url);

  let data = res.data;
  data.map((d) => {
    let text_url = document.createTextNode(d.product_url);
    let text_name = document.createTextNode(d.product_name);
    let li1 = document.createElement("li");
    li1.append(text_name);
    render.append(li1);
    // let text_id = document.createTextNode(d.product_id);
    // render.append(text_id);
    // render.append(text_name);
    // render.append(text_url);
  });
  console.log(data);

  //   console.log(response);
}
// fetch("http://localhost:5000/data")
//   .then((response) => {
//     response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
btn.addEventListener("click", () => {
  fetchData();
  //   console.log(result);
});
