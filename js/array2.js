window.onload = () => {

    loadBookList();
}

const bookList = new Array();

bookList.push({
    bookName : "이것이 취업을 위한 코딩 테스트다 with 파이썬",
    author : "나동빈",
    publisher : "한빛미디어"
});
bookList.push({
    bookName : "코딩 자율학습 스프링 부트 3 자바 백엔드 개발 입문",
    author : "홍팍",
    publisher : "길벗"
});
bookList.push({
    bookName : "혼자 공부하는 얄팍한 코딩 지식",
    author : "고현민",
    publisher : "한빛미디어"
});
bookList.push({
    bookName : "코딩 자율학습 HTML + CSS + 자바스크립트",
    author : "김기수",
    publisher : "길벗"
});
bookList.push({
    bookName : "쏙쏙 들어오는 함수형 코딩",
    author : "에릭 노먼드",
    publisher : "제이펍"
});

const loadBookList = () => {
    const bookListTBody = document.querySelector(".book-list");

    bookListTBody.innerHTML = bookList.map((book) => {
        return `
            <li>
                <span>${book.bookName}</span> |
                <span>${book.author}</span> |
                <span>${book.publisher}</span>
            </li>
        `
    }).join("");

};

const addBookOnClickHandle = () => {
    const book = {
        bookName : document.querySelector(".book-name-input").value,
        author : document.querySelector(".author-input").value,
        publisher : document.querySelector(".publisher-input").value
    }

    bookList.push(book);
    loadBookList();
};
