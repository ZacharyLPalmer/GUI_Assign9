/* Name: Zachary Palmer
Date: 12/19/18
Assignment: 9
Class: GUI 1
*/

var remainingTiles = 100; // remaining tile count
var currentScore = 0;     // current score
var currentWordScore = 0; // current word score
var currentWord = "";     // current word

var ScrabbleTiles = []; // associative array of our bag of letters
ScrabbleTiles["A"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "media/A.jpg" };
ScrabbleTiles["B"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "media/B.jpg" };
ScrabbleTiles["C"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "media/C.jpg" };
ScrabbleTiles["D"] = { "value": 2, "original-distribution": 4, "number-remaining": 4, "image": "media/D.jpg" };
ScrabbleTiles["E"] = { "value": 1, "original-distribution": 12, "number-remaining": 12, "image": "media/E.jpg" };
ScrabbleTiles["F"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "media/F.jpg" };
ScrabbleTiles["G"] = { "value": 2, "original-distribution": 3, "number-remaining": 3, "image": "media/G.jpg" };
ScrabbleTiles["H"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "media/H.jpg" };
ScrabbleTiles["I"] = { "value": 1, "original-distribution": 9, "number-remaining": 9, "image": "media/I.jpg" };
ScrabbleTiles["J"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "media/J.jpg" };
ScrabbleTiles["K"] = { "value": 5, "original-distribution": 1, "number-remaining": 1, "image": "media/K.jpg" };
ScrabbleTiles["L"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "media/L.jpg" };
ScrabbleTiles["M"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "media/M.jpg" };
ScrabbleTiles["N"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "media/N.jpg" };
ScrabbleTiles["O"] = { "value": 1, "original-distribution": 8, "number-remaining": 8, "image": "media/O.jpg" };
ScrabbleTiles["P"] = { "value": 3, "original-distribution": 2, "number-remaining": 2, "image": "media/P.jpg" };
ScrabbleTiles["Q"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "media/Q.jpg" };
ScrabbleTiles["R"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "media/R.jpg" };
ScrabbleTiles["S"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "media/S.jpg" };
ScrabbleTiles["T"] = { "value": 1, "original-distribution": 6, "number-remaining": 6, "image": "media/T.jpg" };
ScrabbleTiles["U"] = { "value": 1, "original-distribution": 4, "number-remaining": 4, "image": "media/U.jpg" };
ScrabbleTiles["V"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "media/V.jpg" };
ScrabbleTiles["W"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "media/W.jpg" };
ScrabbleTiles["X"] = { "value": 8, "original-distribution": 1, "number-remaining": 1, "image": "media/X.jpg" };
ScrabbleTiles["Y"] = { "value": 4, "original-distribution": 2, "number-remaining": 2, "image": "media/Y.jpg" };
ScrabbleTiles["Z"] = { "value": 10, "original-distribution": 1, "number-remaining": 1, "image": "media/Z.jpg" };
ScrabbleTiles["_"] = { "value": 0, "original-distribution": 2, "number-remaining": 2, "image": "media/Blank.jpg" };



 // updates the current word value and score at the bottom of the scren
function updateCurrentWord() {
  var i, e; // index variables
  var hWord = ""; // horizontal word temp value
  var vWord = ""; // vertical word temp value
  var multH = 1; //multiplier values for horizontal and veritical words
  var multV = 1;
  var tempLScore = 0; //temporary lett score
  var tempHWScore = 0; // temporary scores for  horizontal and veritical words
  var tempVWScore = 0;
  for (i = 1; i < 16; i++) { // increments by line
    for (e = 1; e < 16; e++) { //increments by space
      // retrieve letter value from tile
      var lh = $("#line" + i).find("#space" + e).find(".game_tile").attr("letter");
      var lv = $("#line" + e).find("#space" + i).find(".game_tile").attr("letter");
      if (lh == undefined) {
        // set to a space if no tile is on space
        lh = " ";
      } else { //scoring
        //sets our temporary letter score to the value of the letter
        tempLScore = ScrabbleTiles[lh]["value"];
        //triple word
        if ($("#line" + i).find("#space" + e).attr("effect") == "tw") {
          multH = 3;
        } else //double word
        if ($("#line" + i).find("#space" + e).attr("effect") == "dw") {
          multH = 2;
        } else //triple letter
        if ($("#line" + i).find("#space" + e).attr("effect") == "tl") {
          tempLScore = 3 * tempLScore;
        } else //double letter
        if ($("#line" + i).find("#space" + e).attr("effect") == "dl") {
          tempLScore = 2 * tempLScore;
        }
        // add final letter score to word score
        tempHWScore += tempLScore;
      }
      if (lv == undefined) {
        lv = " ";
      } else { //scoring 
        //sets our temporary letter score to the value of the letter
        tempLScore = ScrabbleTiles[lv]["value"];
        //triple word
        if ($("#line" + e).find("#space" + i).attr("effect") == "tw") {
          multV = 3;
        } else //double word
        if ($("#line" + e).find("#space" + i).attr("effect") == "dw") {
          multV = 2;
        } else //triple letter
        if ($("#line" + e).find("#space" + i).attr("effect") == "tl") {
          tempLScore = 3 * tempLScore;
        } else //double letter
        if ($("#line" + e).find("#space" + i).attr("effect") == "dl") {
          tempLScore = 2 * tempLScore;
        }
        // add final letter score to word score
        tempVWScore += tempLScore;
      }
      // add letter to temp words
      hWord += lh;
      vWord += lv;
    }
    // add space at the end of each line to ensure no overflow
    hWord += " ";
    vWord += " ";
  }
  // trim the white space from the front and back of both words
  hWord = $.trim(hWord);
  vWord = $.trim(vWord);
  // if horizontal word does not include any spaces and it is 2+ characters long
  // then it is the current word
  if(!hWord.includes(" ") && hWord.length > 1) {
    $("#currentWord").html("Word: " + hWord);
    $("#currentWord2").html("Word Score: 0" + multH * tempHWScore);
    currentWord = hWord;
    currentWordScore = multH * tempHWScore;
  } else 
  // if vertical word does not include any spaces and it is 2+ characters long
  // then it is the current word
  if(!vWord.includes(" ") && vWord.length > 1) {
    $("#currentWord").html("Word: " + vWord);
    $("#currentWord2").html("Word Score: 0" + multV * tempVWScore);
    currentWord = vWord;
    currentWordScore = multV * tempVWScore;
  // if the above criteria are not met than we do not have a valid word yet
  } else {
    $("#currentWord").html("Word: N/a");
    $("#currentWord2").html("Word Score: 0");
    currentWord = "";
    currentWordScore = 0;
  }
}


$(function () {
  // make game tiles draggable with revert if placed incorrectly
  $(".game_tile").draggable({
    snap: ".board_tile,.game_tile_holder",
    snapmode: "both",
    revert: "invalid"
  });

  // make the tile holder droppable so you can drag a tile from the board

  $(".game_tile_holder").droppable({
    drop: function (event, ui) {
      // make sure there isn't already a tile on this space
      if($(this).children().length == 0){
        ui.draggable.appendTo(this).css("left", "0px").css("top", "0px")
        updateCurrentWord();
      }
    }
  });

  // make board tiles droppable so you can drag a tile from the holder
  $(".board_tile").droppable({
    drop: function (event, ui) {
      // make sure there isn't already a tile on this space
      if($(this).children().length == 0){
        ui.draggable.appendTo(this).css("left", "0px").css("top", "0px")
        updateCurrentWord();
      }
    }
  });
});

// Takes in a tile parameter as an index of the 7 spots in the tile holder 
// Generates a new tile for that spot based on the probability of the tile
// bag
function refreshTile(tile) {
  if ($("#tile" + (tile + 1)).children().length == 0) {
    var char;
    var runningCount = 0;
    var randomNum = 0;
    randomNum = Math.floor((Math.random() * remainingTiles));
    for (k = 0; k < Object.keys(ScrabbleTiles).length; k++) {
      if (k == Object.keys(ScrabbleTiles).length - 1) {
        char = "_";
      } else {
        char = String.fromCharCode(65 + k);
      }
      runningCount += ScrabbleTiles[char]["number-remaining"];
      if (randomNum < runningCount) {
        remainingTiles--;
        ScrabbleTiles[char]["number-remaining"]--;
        $("#tile" + (tile + 1)).html("");
        var newDiv = $("<div class=\"game_tile "
          + char
          + "_tile\" letter=\""
          + char
          + "\"><img src=\""
          + ScrabbleTiles[char]["image"]
          + "\"class=\"game_tile_img\"></div>")
        $("#tile" + (tile + 1)).append(newDiv);
        $(".game_tile").draggable({ snap: ".board_tile,.game_tile_holder", revert: "invalid" });
        break;
      }
    }
  }
}

// clears board of tiles
function clearBoard() {
  var i; //index variable
  for (i = 1; i < 16; i++) {
    for (e = 1; e < 16; e++) {
      $("#line" + i).find("#space" + e).html("");
    }
  }
}

//refresh your letters button
$("#generate").click(function () {
  var i; //index variable
  clearBoard(); 
  for (i = 1; i <= 7; i++)//for loop to throw current letter in bag
  {
    var letter = $("#tile" + i).find(".game_tile").attr("letter");
    ScrabbleTiles[letter]["number-remaining"]++;
    remainingTiles++;
    $("#tile" + i).html("");
  }
  for (i = 0; i < 7; i++)//for loop to fill out letter holder with new letters
  {
    refreshTile(i);
  }
});

// submit current word button
$("#save").click(function () {
  // if current word is not valid then open dialog box
  if (currentWord == "") {
    $( "#message" ).dialog( "open" );
    return;
  }
  var i; // index variable
  currentScore += currentWordScore; // add word score
  clearBoard(); // clear board of tiles
  for (i = 0; i < 7; i++)// for loop to fill out letter holder with new letters
  {
    refreshTile(i);
  }

  // update all our friendly output 
  $("#currentScore").html("Score: " + currentScore)
  $("#tileCount").html("Tiles Left: " + remainingTiles)
  $("#currentWord").html("Word: N/a");
  $("#currentWord2").html("Word Score: 0");

  // reset current word values
  currentWordScore = 0;
  currentWord = "";
});

// dialog box to alert player if word is not valid
$( function() {
  $( "#message" ).dialog({
    modal: true,
    autoOpen: false,
    buttons: {
      Ok: function() {
        $( this ).dialog( "close" );
      }
    }
  });
});

$(document).ready(function () {
  var i; // index variable
  for (i = 0; i < 7; i++)// for loop to fill out letter holder with new letters
  {
    refreshTile(i);
  }
  $("#tileCount").html("Tiles Left: " + remainingTiles)
});