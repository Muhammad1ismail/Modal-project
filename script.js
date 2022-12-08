const modalOverlay = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");



openModalBtn.addEventListener("click",() =>{
   modalOverlay.classList.add("show-modal-overlay");
})

closeModalBtn.addEventListener("click",() =>{
   modalOverlay.classList.remove("show-modal-overlay");
})