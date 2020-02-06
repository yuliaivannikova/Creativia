let news = document.getElementById("news"),
    nav = document.getElementById("nav"),
    page = 1;

//creat btn
let btnNext = document.createElement("div");
btnNext.innerText = "MORE NEWS";
btnNext.classList.add('news__btn');

// btn event onclick
btnNext.addEventListener('click', function () {
    News(page, 1);
});



function News(_page, _count) {
    _page = _page + _count;
    page = _page;

    const url = `https://newsapi.org/v2/everything?page=${_page}&qInTitle=develop&apiKey=528aeceed07e4156a030d11e005954a3`;
    var req = new Request(url);

    fetch(req)
        .then(response => response.json())
        .then(function (myJson) {
            arrSearch = myJson;

            // create array
            let resultsSearch = arrSearch.articles;

            let length = 2;
            for (i = 0; i < length; i++) {

                // object 
                objSearch = resultsSearch[i];
                console.log(objSearch);

                // create dom elements

                // create row
                let row = document.createElement('div');
                row.classList.add('row');

                // create cols
                let colLeft = document.createElement('div');
                colLeft.classList.add('col-md-6');
                let colRight = document.createElement('div');
                colRight.classList.add('col-md-6');
                colRight.classList.add('news__right');

                // create img (data-src for lazy load)
                let img = document.createElement('img');
                img.setAttribute("data-src", `${objSearch.urlToImage}`);
                img.classList.add('news__img');
                img.classList.add('lazy');


                // create title
                let title = document.createElement('h2');
                title.innerText = objSearch.title;
                title.classList.add('news__text');

                // create date
                let date = document.createElement('p');
                let dateNumber = objSearch.publishedAt.substr(0, 10);
                date.innerText = dateNumber;
                date.classList.add('news__date');

                // create description
                let description = document.createElement('p');
                description.innerText = objSearch.description;
                description.classList.add('news__description');

                // create link
                let link = document.createElement('a');
                link.classList.add('news__link');
                link.setAttribute("href", `${objSearch.url}`);
                link.setAttribute("target", "_blank");
                link.innerText = 'VIEW MORE';

                // add dom elements

                colLeft.appendChild(img);

                colRight.appendChild(title);
                colRight.appendChild(date);
                colRight.appendChild(description);
                colRight.appendChild(link);

                news.appendChild(row);

                row.appendChild(colLeft);
                row.appendChild(colRight);

            }

            nav.appendChild(btnNext);
            console.log(page);


        })

        .catch(function (error) {
            console.log("ERROR!");
            console.error(error);
        })
}

News(1, 0)