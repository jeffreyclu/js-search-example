const searchDivs = document.getElementsByClassName('article');
const foundSpans = document.getElementsByClassName('found');

function searchItem() {
    for (let i=0; i<searchDivs.length; i++) { 
        searchDivs[i].setAttribute('class', 'article visible');
        for (let j=0; j<foundSpans.length; j++) {
            foundSpans[j].setAttribute('class', 'unfound');
        }
    }
    const searchTerm = document.getElementById('search_term').value;
    if (searchTerm.length > 1) {
        for (let i=0; i<searchDivs.length; i++) {
            let searchDiv = searchDivs[i];
            let searchText = searchDivs[i].innerHTML;
            if (searchText.includes(searchTerm)) {
                let startIndex = searchText.indexOf(searchTerm);
                if (startIndex >= 0) {
                    searchText = searchText.substring(0, startIndex) + "<span class='found'>" + searchText.substring(startIndex, startIndex + searchTerm.length) + "</span>" + searchText.substring(startIndex + searchTerm.length);
                    searchDiv.innerHTML = searchText;
                }
            }
            else {
                searchDiv.setAttribute('class', 'article not-found')
            }
        }

        if (document.getElementById('reset-button') === null) {
            const navbarLinksDiv = document.getElementById('navbar-links');
            const resetButton = document.createElement('button');
            resetButton.setAttribute('id', 'reset-button');
            resetButton.innerHTML = "Reset";
            resetButton.setAttribute('onclick', 'resetSearch()')
            navbarLinksDiv.appendChild(resetButton);
        }
    }
    else {
        if (document.getElementById('reset-button') !== null) {
            const selButton = document.getElementById('reset-button');
            const navbarLinksDiv = document.getElementById('navbar-links');
            navbarLinksDiv.removeChild(selButton);
        } 
    }
}

function resetSearch() {
    for (let i=0; i<searchDivs.length; i++) { 
        searchDivs[i].setAttribute('class', 'article visible');
        for (let j=0; j<foundSpans.length; j++) {
            foundSpans[j].setAttribute('class', 'unfound');
        }
    }
}
