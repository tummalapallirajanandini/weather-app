let form = document.getElementById("parent-form")
    let cityName = document.getElementById("city-Name")
    let cityTemp = document.getElementById("city-temp")
    let apiKey = "2c9534270d948a3256ead731b0381b5e"
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        cityTemp.innerHTML = ""
        // console.log("city name is",cityName.value)
        // alert("Welcome")
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appId=${apiKey}&units=metric`
        fetch(url)
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((res) => {
                console.log(res)
                if (res.cod == "404") {
                    alert("City name not found")
                }
                else {
                    let { main, name, sys } = res
                    let div = document.createElement("div")
                    div.classList.add("city")
                    const result = `
            <h1>${name}</h1>
            <p>
                Temp:${main.temp} <sup>0</sup>C
                Country${sys.country}
                </p>
        `
                    div.innerHTML = result
                    cityTemp.appendChild(div)
                }
            })

    })