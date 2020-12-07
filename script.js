const catAPI = "https://api.thecatapi.com/v1/images/search";
const generateBtn = document.getElementById("generate");
const catImgDiv = document.getElementById("catImage");

const fetchPic = () => {
	catImgDiv.innerHTML = "";
	fetch(catAPI)
		.then((resp) => resp.json())
		.then((data) => {
			const cat_URL = data[0].url;
			const catImg = document.createElement("img");
			catImg.setAttribute("src", `${cat_URL}`);
			catImgDiv.appendChild(catImg);
		});
};

generateBtn.addEventListener("click", fetchPic);
