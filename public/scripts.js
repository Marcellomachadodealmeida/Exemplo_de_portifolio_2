const modalOverLay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalOverLayA = document.querySelector('.modal-overlay active')

for (let card of cards){
  card.addEventListener("click",function(){
    const videoID = card.getAttribute("id")
    modalOverLay.classList.add('active')
    modalOverLay.querySelector("iframe").src =`https://www.youtube.com/embed/${videoID}`
  })
}
document.querySelector('.close-modal').addEventListener("click",function(){
  modalOverLay.classList.remove('active')
  modalOverLay.querySelector("iframe").src =" "
})

