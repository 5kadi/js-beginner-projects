var imgArray = ["./img1.jpg", "./img2.jpg", "./img3.jpg"]
var currentImgIdx = 0
var imgContainer = document.getElementById("imgContainer")
var imgBox = document.getElementById("imgBox")
var nextImg = document.getElementById("nextImg")
var previousImg = document.getElementById("previousImg")



nextImg.addEventListener("click", () => {
    currentImgIdx = currentImgIdx < imgArray.length - 1 ? currentImgIdx + 1 : 0
    imgBox.src = imgArray[currentImgIdx]
})
previousImg.addEventListener("click", () => {
    currentImgIdx = currentImgIdx > 0 ? currentImgIdx - 1: imgArray.length - 1
    imgBox.src = imgArray[currentImgIdx]
})
for (let event of ["mouseover", "mouseout"]) {
    imgContainer.addEventListener(event, () => {
        [nextImg, previousImg].forEach((el) => {
            el.classList.toggle("visibleOff")
        })
    })
}


























