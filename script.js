
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSectionImages = []; 
let currentIndex = 0;


document.querySelectorAll("section").forEach(section => {
  // Is section ke andar mojud saari images ki list
  const sectionImages = Array.from(section.querySelectorAll(".clickable-img"));
  
  sectionImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      
    
      currentSectionImages = sectionImages; 
      currentIndex = index; // Us section ke andar ka number
    });
  });
});


nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex + 1;
  if (currentIndex >= currentSectionImages.length) {
    currentIndex = 0; 
  }
  modalImg.src = currentSectionImages[currentIndex].src;
});


prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = currentSectionImages.length - 1; 
  }
  modalImg.src = currentSectionImages[currentIndex].src;
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});