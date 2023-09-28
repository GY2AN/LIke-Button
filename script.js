let isImageLiked = false;
function onClickLikeButton(){
   if(isImageLiked === false){ 
    document.getElementById("likeButton").style.backgroundColor = "blue";
    document.getElementById("likeIcon").style.color = "blue";
    document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    isImageLiked = true;

} else {
    document.getElementById("likeButton").style.backgroundColor = "grey";
    document.getElementById("likeIcon").style.color = "grey";
    document.getElementById("puppyImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
    isImageLiked = false;
   
   }
}
