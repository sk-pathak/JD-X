
document.addEventListener("DOMContentLoaded", function () {

    let nextBtn = document.getElementById("next-btn");
    let prevBtn = document.getElementById("prev-btn");
    let listContainer = document.querySelector(".list-container ul");
    let listItems = document.querySelectorAll(".list-container ul li");
    let length = listItems.length;
    let currentIndex = 4;
    let itemsPerPage = 0;
    function handleSize() {
        if ((window.matchMedia("(max-width:550px)")).matches) {
            itemsPerPage = 3;
        } else if ((window.matchMedia("(min-width:550px) and (max-width: 640px)")).matches) {
            itemsPerPage = 4;
        }
        else {
            itemsPerPage = 5;
        }
        let endIndex = 0;



        function showItems() {
            // Reset previous highlighting
            listItems.forEach(function (item) {
                item.classList.remove("text-zinc-400");
            });

            let startIndex = currentIndex;
            endIndex = startIndex + itemsPerPage;

            // Apply highlighting to the first two items
            for (let i = startIndex; i < endIndex - 3; i++) {
                listItems[i].classList.add("text-zinc-400");
            }
            // for items per page 3 case
            if (itemsPerPage == 3) {
                listItems[startIndex].classList.add("text-zinc-400");
            }

            let displayItems = Array.from(listItems).slice(startIndex, endIndex);
            listContainer.innerHTML = '';
            displayItems.forEach(function (item) {
                listContainer.appendChild(item.cloneNode(true));
            });
        }

        function updateButtons() {
            nextBtn.disabled = currentIndex >= listItems.length - itemsPerPage;
            prevBtn.disabled = currentIndex <= 0;
        }

        nextBtn.addEventListener("click", function () {
            currentIndex += itemsPerPage;
            if (length - currentIndex < itemsPerPage) {
                currentIndex = length - itemsPerPage;
            }
            showHide(null);
            showItems();
            updateButtons();
        });

        prevBtn.addEventListener("click", function () {
            if (currentIndex - itemsPerPage < 0) {
                currentIndex = 0;
            }
            else {
                currentIndex -= itemsPerPage;
            }
            showHide(null);
            showItems();
            updateButtons();
        });

        showItems();
        updateButtons();

    }
    handleSize();
    window.addEventListener("resize", handleSize);

});
let preElement = null;
let preLst = null;
function showHide(events) {
    if (events == null && preElement != null && !preElement.classList.contains('hidden')) {
        preElement.classList.toggle('hidden');
        preLst.classList.toggle('text-blue-700');
    }
    else if (events != null) {
        let element = document.getElementById('showContents');
        let lst = document.getElementById(events + '-col');
        if (preLst == lst) {
            element.classList.toggle('hidden');
            lst.classList.toggle('text-blue-700');
        }
        else if (preElement != null && !preElement.classList.contains('hidden')) {
            preElement.classList.toggle('hidden');
            preLst.classList.toggle('text-blue-700');
            element.classList.toggle('hidden');
            lst.classList.toggle('text-blue-700');
        }
        else {
            element.classList.toggle('hidden');
            lst.classList.toggle('text-blue-700');
        }
        preElement = element;
        preLst = lst;
    }
}