const storyContainer = document.querySelector(".storyContainer");

storyContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    storyContainer.scrollLeft += evt.deltaY/5;
});
const like = document.querySelectorAll(".like")
for(let btn of like){
    btn.addEventListener("click",function(e){
        console.log(e.target);
        if(e.target.src.match("./images/like.jpg")){
            this.src = "./images/liked.jpg"
           let likeNum = this.parentNode.parentNode.parentNode.children[3].children[0].childNodes[1]
           let Count = parseInt(likeNum.innerText)
           Count +=1
           likeNum.innerText = Count
        }
        else{
            this.src = "./images/like.jpg"
            let likeNum = this.parentNode.parentNode.parentNode.children[3].children[0].childNodes[1]
            let Count = parseInt(likeNum.innerText)
            Count -=1
            likeNum.innerText = Count
        }
    })
}
const CmmtPic = document.querySelectorAll(".CmmtPic")
for(let pic of CmmtPic){
    pic.addEventListener("click",function(e){
        this.parentNode.children[1].children[0].focus()
    })
}

const comment = document.querySelectorAll(".cmmtIcon")
for(let cmmt of comment){
    cmmt.addEventListener("click",function(){
        this.parentNode.parentNode.parentNode.children[4].children[1].children[0].focus();
    })
}
const MessageBox = document.querySelector(".messagebox")
const MessageBoxBtn = document.querySelector(".goMsgBx")
MessageBoxBtn.addEventListener("click",function(){
    MessageBox.classList.add("active")
})
const Goback = document.querySelector(".backArrow")
Goback.addEventListener("click",function(){
    MessageBox.classList.remove("active")
})
