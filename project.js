const btn = document.querySelector(".btn");
const embed = document.querySelector(".embed");


btn.addEventListener("click", () => {
    const opiKey = 'A88Qo1J9YTyiZ2AXc3hwXz';
    const client = filestack.init(opiKey);
    const options = {
        onUploadDone: (uploadResponse) => {
            console.log("onUploadDone", uploadResponse);
            embed.setAttribute("href", uploadResponse.filesUploaded[0].url);
        },
};
client.picker(options).open();
    
    
    
});

let view = document.querySelector(".view");
let dropdown = document.querySelector("#dropdown");
view.onclick = () => {
dropdown.classList.toggle("show");
}


