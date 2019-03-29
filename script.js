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

        $("#tableData").empty();

    $.ajax({
        url: "http://itunes.apple.com/search?term=" + audio[size] + "&limit=" + document.getElementById("resultsType").value,
        dataType: "jsonp",
        success: success
    });


}

function success(data) {

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

    }
    console.log(string);

    $("#tableData").append(string);


}

