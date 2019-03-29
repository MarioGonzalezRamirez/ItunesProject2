console.log(getQueryParameter("song"));

function getQueryParameter(name) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false;

}

$.ajax({
    url: "http://itunes.apple.com/search?term=" + getQueryParameter("artist"),
    dataType: "jsonp",
    success: success
});


function success(data) {

    var s = parseInt(getQueryParameter("song")) + 1;

    var d = new Date(data.results[s].releaseDate);
    var p = new Date(data.results[s].trackTimeMillis);

    $("#zay").append( "Song Rank: " + s + '<br><br>' );
    $("#zay").append( "Artist Name: " + data.results[s].artistName + '<br><br>' );
    $("#zay").append( "Song Name: " + data.results[s].trackName + '<br><br>' );
    $("#zay").append("<img src='" + data.results[s].artworkUrl100 + "'>" + '<br><br>');
    $("#zay").append( "Album Name:  " + data.results[s].collectionName + '<br><br>');
    $("#zay").append( "<audio controls src ='" + data.results[s].previewUrl + "'>" + '<br><br>');
    $("#zay").append( '<br><br>' + "Song Status: " + data.results[s].trackExplicitness + '<br><br>');
    $("#zay").append("Genre: " + data.results[s].primaryGenreName + '<br><br>');
    $("#zay").append("<a href='" + data.results[s].collectionViewUrl + "'>" + "Album Link" + "</a>" + '<br><br>');
    $("#zay").append("Release Date: " +  d.getDay() + "/" + d.getDate() + "/" + d.getFullYear() + '<br><br>');
    $("#zay").append("Track Time: " + p.getMinutes() + ":" + p.getSeconds());

}

