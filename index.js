function infiniteScroll(data, count, container, elementType, objectName, appendType) {
    var index = 0;
    window.addEventListener("scroll", function () {
        if (window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
            loadImage(count);
        }
    });
    function loadImage(count) {
        var ids = objectName;
        var breakCondition = 0;
        for (var loopCount = 0; loopCount < data.length; loopCount++) {
            if (loopCount < count) {
                var div = document.createElement(elementType[0]);
                div.classList.add(elementType[1]);
                if (index <= data.length - 1) {
                    if (appendType === "img") {
                        div.setAttribute("src", data[index][ids]);
                        console.log("image");
                    }
                    else if (appendType === "text") {
                        div.innerHTML = data[index][ids];
                    }
                }
                else {
                    breakCondition = 1;
                    break;
                }
                if (container != null) {
                    container.appendChild(div);
                }
            }
            else {
                break;
            }
            if (breakCondition == 1) {
                break;
            }
            index++;
        }
    }
    loadImage(count);
}
