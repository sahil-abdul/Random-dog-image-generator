let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let img = document.querySelector("img");
let heading = document.querySelector("h1");


btn.addEventListener("click", async () => {
  heading.style.display = "none"
  img.style.display = "block"
  let res = await axios.get(url);
  let link = res.data.message;
  img.setAttribute('src',link)
 
});
