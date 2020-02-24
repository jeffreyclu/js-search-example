function searchItem() {
    const searchDivs = document.getElementsByClassName('article')
    const foundSpans = document.getElementsByClassName('found')
    for (let i=0; i<searchDivs.length; i++) { 
        searchDivs[i].setAttribute('class', 'article visible');
        for (let j=0; j<foundSpans.length; j++) {
            foundSpans[j].setAttribute('class', 'unfound');
        }
    }
    const searchTerm = document.getElementById('search_term').value;
    if (searchTerm.length > 2) {
        for (let i=0; i<searchDivs.length; i++) {
            let searchDiv = searchDivs[i];
            let searchText = searchDivs[i].innerHTML;
            if (searchText.includes(searchTerm)) {
                let startIndex = searchText.indexOf(searchTerm);
                if (startIndex >= 0){
                    console.log(startIndex)
                    // console.log('yes', searchTerm)
                    // console.log(searchDivs[i])
                    searchText = searchText.substring(0, startIndex) + "<span class='found'>" + searchText.substring(startIndex, startIndex + searchTerm.length) + "</span>" + searchText.substring(startIndex + searchTerm.length);
                    // searchDivs[i].setAttribute('class', 'article found')
                    searchDiv.innerHTML = searchText;
                }
            }
            else {
                console.log('no')
                searchDiv.setAttribute('class', 'article not-found')
            }
        }
    }
}