var images = ["img/drake.jpg", "img/jcole.jpg","img/nine.gif", "img/jayz.jpg", "img/kanye.gif", "img/logic.gif"];
var audio = ["drake","jcole", "sixnine", "jayz", "kanye", "logic"];

function start(size) {

    var sounds = document.getElementsByTagName('audio');
    for (i = 0; i < sounds.length; i++) {
        sounds[i].pause();
    }

    document.getElementById(audio[size]).play();

    document.getElementById("image").src = images[size];


}

function processResults(){

        var size = document.getElementById("artistType").value;

    // console.log("http://itunes.apple.com/search?term=" + audio[size] + "&limit=" + document.getElementById("resultsType"));

    $("#tableData").empty();

    $.ajax({
        url: "http://itunes.apple.com/search?term=" + audio[size] + "&limit=" + document.getElementById("resultsType").value,
        dataType: "jsonp",
        success: success
    });


    // $("#tableData").remove();

}

function success(data) {

    // var data = document.getElementsByTagName('table');
    // for (i = 0; i < data.length; i++) {
    //
    //     data[i].remove();
    // }

    // Apple Music Link:" + data.results[i].trackViewUrl

    console.log(data);

    var string = "";
        for(var i = 0; i < data.results.length ; i++){
            var song = i + 1;

            string += "<tr>";
            string += "<td class='w3-container w3-center w3-animate-right' id='border'> Song Rank: " + song + "</td>";
            string += "<td class='w3-container w3-center w3-animate-right' id='border'>Artist Name:" + data.results[i].artistName + "</td>";
            string += "<td class='w3-container w3-center w3-animate-right' id='border'> Song Name: <a href='detail.html?song=" + i + "&artist=" + data.results[i].artistName +  "'>" + data.results[i].trackName + "</a></td>";
            string += "<td class='w3-container w3-center w3-animate-right' id='border' onclick='start();'> Preview Url:<audio controls src='" + data.results[i].previewUrl + "'></td>";
            string += "<td class='w3-container w3-center w3-animate-right' id='border'> Album Name:" + data.results[i].collectionName + "</td>";
            string += "<td class='w3-container w3-center w3-animate-right' id='border'> Album Cover:<img src='" + data.results[i].artworkUrl100 + "'></td>";
            string += "</tr>";

    // document.getElementById("songRank").innerHTML = data.results[i].trackNumber
    // document.getElementById("artistName").innerHTML = data.results[i].artistName;
    // document.getElementById("songName").innerHTML = data.results[i].trackName;
    // document.getElementById("audioPreview").innerHTML = data.results[i].previewUrl;
    // document.getElementById("albumName").innerHTML = data.results[i].collectionName;
    // document.getElementById("artistArt").innerHTML = data.results[i].artworkUrl30;
    }
    console.log(string);

    $("#tableData").append(string);

    $("#tableData").remove(string);

// <p><a href="data.results[i].trackViewUrl" target="_blank">AppleMusicLink</a></p>
//     href="https://www.w3schools.com" target="_blank">Visit W3Schools!
}


// function calculateResults(size){
//     if(size == 0){
//         return 0;
//     }
//     if(size == 1){
//         return 1
//     }
//     if(size == 2){
//         return 2;
//     }
//     if(size == 3){
//         return 3
//     }
//     if(size == 4){
//         return 4;
//     }
//     if(size == 5){
//         return 5
//     }
// }

    //var size = document.getElementById("schoolSize").value;
    //var area = document.getElementById("surroundingArea").value;
    //var correct = calculateResults(size);
