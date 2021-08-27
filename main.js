let answer = document.querySelectorAll(".answer");
let arrow = document.querySelectorAll(".arrow");
let question = document.querySelectorAll(".question");
let box = document.querySelector(".box");

question.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (arrow[index].classList.contains("rotate")) {
      arrow[index].classList.remove("rotate");
      answer[index].style.display = "none";
      box.classList.remove("move");
      item.style.fontWeight = "400";
    } else {
      item.style.fontWeight = "700";
      answer[index].style.display = "block";
      box.classList.add("move");


      answer.forEach((itemanswer , i) =>{
        if (i != index){
          itemanswer.style.display="none";
          arrow[i].classList.remove("rotate");
          question[i].style.fontWeight = "400";
        }
      });
     
      arrow[index].classList.add("rotate");
    }
  });
});
