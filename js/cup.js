window.onload = () => {
    const cupImg = document.querySelector(".img-border img");
    cupImg.src = "./imges/cup1.jpg";
    cupImg.onclick = cupImgOnClickHandle;

    document.onclick = () => {
        if(cupImg .includes("cup1")) {
            cupImg = "./imges/cup2.jpg"
        } else {
            cupImg = "./imges/cup1.jpg"
        };
    }
}

const cupImgOnClickHandle = (e) => { // e > 이벤트라는 객체
    if(e.target.src .includes("cup1")) {
        e.target.src = "./imges/cup2.jpg"
    } else {
        e.target.src = "./imges/cup1.jpg"
    };
}