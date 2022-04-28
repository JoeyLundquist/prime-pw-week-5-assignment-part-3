console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let album = {
        Title: title,
        Artist: artist, 
        YearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

console.log(addToCollection('The Prophecy', 'NSP', 2020));
console.log(addToCollection('Cool Patrol', 'NSP', 2018));
console.log(addToCollection('Cake and Cognac', 'Yung Gravy', 2022));
console.log(addToCollection('Professional Rapper', 'Lil Dicky', 2015));
console.log(addToCollection('Confessions of a Dangerous Mind', 'Logic', 2019));
console.log(addToCollection('Music to be Murdered by', 'Eminem', 2020));
console.log(collection);

function showCollection(array){
    console.log(array.length);
    for (let albums in array){
        console.log(`${array[albums].Title} by ${array[albums].Artist}, published in ${array[albums].YearPublished} `);
    }
}

showCollection(collection);

function findByArtist(artist){
    let results = [];
    for(let albums in collection){
        if (artist === collection[albums].Artist){
            results.push(collection[albums])
        }
    }
    return results;
}

console.log(findByArtist('NSP'));
console.log(findByArtist('Eminem'));
console.log(findByArtist('Wookiefoot'));

function search(query){
    let results = [];
    for(let i=0; i<=collection.length-1; i++){
        if(query == null || query == ""){
            results = collection
        }
        else if(query === collection[i].Title || query === collection[i].Artist || query === collection[i].YearPublished){
            results.push(collection[i])
        }
    }
    return results;
}

console.log('Testing my search function')
console.log(search(2020));
console.log(search(1991));
console.log(search('The Prophecy'));
console.log(search('NSP'));
console.log(search());