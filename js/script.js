let lang = {
    "pl": {
        "advice0": "Pierwszą, najbardziej podstawową, banalną, ale również skuteczną zasadą jest stosowanie silnych haseł, które nie są powiązane z Twoimi danymi osobowymi.",
    },

    "ua": {
        "advice0": "a",
    }
}

let currentLang = "pl"

render()

function render() {
    document.body.innerHTML = `
    <header class="backgroundBox">
        <div class="leftPart">
            <div class="headerText leftText">CYBER<br>BEZPI<br>ECZEŃ<br>STWO</div>
            <div class="info">
                <div class="pl info-pl language" data-lang="pl">DOWIEDZIEĆ SIĘ</div>
                <div class="ua info-ua language" data-lang="ua">ДІЗНАТИСЯ</div>
            </div>
        </div>
        <div class="rightPart">
            <h1 class="headerText rightText">CYBER<br>BIEZPI<br>ECZEŃ<br>STWO</h1>
        </div>
    </header>

    <div class="main">


        <div class="container">
            <div class="cards">
                <div class="cardText">
                    ${lang[currentLang].advice0}
                </div>
            </div>
            <div class="cards">
                <div class="cardText">
                    <div class="cardText">
                        Korzystaj z bezpiecznego połączenia internetowego
                        podczas pracy z poufnymi danymi, takimi jak hasła
                        , numery kart kredytowych lub dane ubezpieczenia społecznego.
                    </div>
                </div>
            </div>
            <div class="cards">
                <div class="cardText">
                    Regularne aktualizacje oprogramowania pomagają zapobiegać 
                    podatnościom w systemie oraz chronią przed znanymi
                     podatnościami, które mogą być wykorzystane w cyberataku.
                </div>

            </div>
            <div class="cards">
                <div class="cardText">
                    W mediach społecznościowych ważne jest, aby dbać 
                    o swoje życie prywatne i nie dzielić się poufnymi
                     informacjami. Nie otwieraj podejrzanych linków. 
                     Bądź ostrożny podczas publikowania prywatnych 
                     zdjęć i nie daj przestępcom możliwości 
                     wykorzystania Twoich informacji do cyberataków.
                </div>
            </div>
            <div class="cards">
                <div class="cardText">
                    Bezpieczne przechowywanie danych osobowych oraz
                    regularne usuwanie przestarzałych danych pomaga
                     zapobiec wyciekom danych oraz cyberatakowi 
                     związanemu z wykorzystaniem skradzionych danych osobowych.
                </div>
            </div>
        </div>


    </div>

    <footer>
        <div class="footerText">&copy; 2023 CYBERBEZPIECZEŃSTWO</div>
    </footer>
    `

    document.querySelectorAll(".language").forEach((langItem) => {
        console.log(123, langItem)
        langItem.addEventListener("click", (event) => {
            currentLang = event.target.dataset.lang
            console.log(currentLang)
            render()
        })
    })
}

