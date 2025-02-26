function toggleMode(){
const html = document.documentElement
html.classList.toggle('light')

//pegar a tag image 
const img = document.querySelector("#profile img")

//substituir image
if (html.classList.contains('light')) {
  //se ter light mode,adicionar a image light
  img.setAttribute('src', './assets/avatar-light.png')
  img.setAttribute("alt", "maykbrito light mode")
} else {
  //se tiver sem light mode, manter a imagem atual
  img.setAttribute("src", "./assets/avatar.png")
   img.setAttribute(
     "alt",
     "Mark brito com óculos de camisa preta sorrindo com fundo amarelo"
   )
}

}