console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, /*tracks*/){
    let album = {
        Title: title,
        Artist: artist, 
        YearPublished: yearPublished,
        //Tracks: tracks
    }
    collection.push(album);
    return album;
}

/*let prophTracks =[
    {trackName: 'Intro', duration: '1:11'},
    {trackName: 'The Mystic Crystal', duration: '11:54'},
    {trackName: 'It\'s Bedtime', duration: '3:11'},
    {trackName: 'The Wishing Bear',}
];*/

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
        console.log(`${array[albums].Title} by ${array[albums].Artist}, published in ${array[albums].YearPublished}:`);
    }
}// I am unable to figure out how to do the tracks stretch goal. Not gonna exceed expectations this week...


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

let searchParameter = {artist: null, year: null}

function search(query){
    let results = [];
    for(let i=0; i<=collection.length-1; i++){
        if(query == null || query == "" || (query.artist == null && query.year == null)){//I used the == instead of ===, when i tried === it did not work.
            results = collection
        }
        else if(query.artist === collection[i].Artist && query.year === collection[i].YearPublished){
            results.push(collection[i])
        }
    }
    return results;
}



console.log('Testing my search function');
console.log(search(searchParameter));
searchParameter.artist = 'NSP';
searchParameter.year = 2020;
console.log(search(searchParameter));
searchParameter.artist = 'Eminem';
searchParameter.year = 1999;
console.log(search(searchParameter));
console.log(search());
