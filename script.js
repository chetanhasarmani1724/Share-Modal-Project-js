let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");


let openmodal=()=>{

    modal.classList.add("active")
   overlay.classList.add("overlayactite");

}

let closeModal =()=>{
    modal.classList.remove("active")
   overlay.classList.remove("overlayactite");

}

let openwindow = ()=>{
    window.open("https://drive.google.com/file/d/1N9Y_EiARepkYNZQ_ck-w5ywVjHocJdN-/view?usp=share_link","_blank");
}