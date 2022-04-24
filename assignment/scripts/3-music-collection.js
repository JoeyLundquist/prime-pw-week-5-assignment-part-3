console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let album = {
        Title: title,
        Artist: artist, 
        YearPublished: yearPublished
    }
    collection.push(album);
}

addToCollection('The Prophecy', 'NSP', 2020);
console.log(collection)