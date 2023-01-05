function clearPage(){
    const content = document.getElementById('content');
    content.className = ' ';
    let first = content.firstElementChild;
    while(first){
        first.remove();
        first = content.firstElementChild;
    }
};

export default clearPage;