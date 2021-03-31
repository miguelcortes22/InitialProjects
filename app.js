fetch('http://gateway.marvel.com/v1/public/characters/1009610?ts=1617130975&apikey=506f764f80d827f57672285f01d34535&hash=6a25c1448f7cc0abd841f72b16183049'
).then( (response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois'); 
    
    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
    });
    
    console.log(jsonParsed);
})

fetch('http://gateway.marvel.com/v1/public/characters/1009351?ts=1617130975&apikey=506f764f80d827f57672285f01d34535&hash=6a25c1448f7cc0abd841f72b16183049'
).then( (response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois'); 
    
    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
    });
    
    console.log(jsonParsed);
})

fetch('http://gateway.marvel.com/v1/public/characters/1009664?ts=1617130975&apikey=506f764f80d827f57672285f01d34535&hash=6a25c1448f7cc0abd841f72b16183049'
).then( (response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois'); 
    
    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
    });
    
    console.log(jsonParsed);
})

fetch('http://gateway.marvel.com/v1/public/characters/1009368?ts=1617130975&apikey=506f764f80d827f57672285f01d34535&hash=6a25c1448f7cc0abd841f72b16183049'
).then( (response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois'); 
    
    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
    });
    
    console.log(jsonParsed);
})

fetch('http://gateway.marvel.com/v1/public/characters/1009220?ts=1617130975&apikey=506f764f80d827f57672285f01d34535&hash=6a25c1448f7cc0abd841f72b16183049'
).then( (response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois'); 
    
    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
    });
    
    console.log(jsonParsed);
})

fetch('http://gateway.marvel.com/v1/public/characters/1009189?ts=1617130975&apikey=506f764f80d827f57672285f01d34535&hash=6a25c1448f7cc0abd841f72b16183049'
).then( (response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#herois'); 
    
    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

        createDivHero(srcImage, nameHero, divHero);
    });
    
    console.log(jsonParsed);
})


function createDivHero(srcImage,nameHero,divToAppend) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)
    
    divPai.classList.add("personagem");
}