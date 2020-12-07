$(document).ready(function() {
  // JQUERY WIDGET: DIALOG
  $("#dialog1").dialog({
    autoOpen: false,
    modal: true,
    show: "blind",
    hide: "blind"
  });

  $("#dialog2").dialog({
    autoOpen: false,
    modal: true,
    show: "blind",
    hide: "blind"
  });

  $("#dialog3").dialog({
    autoOpen: false,
    modal: true,
    show: "blind",
    hide: "blind"
  });

  $("#game_Zelda").click(function() {
    $("#dialog1").dialog("open");
  });

  $("#game_Tecmo").click(function() {
    $("#dialog2").dialog("open");
  })

  $("#game_RcProAm").click(function() {
    $("#dialog3").dialog("open");
  })


  // JQUERY WIDGET: ACCORDION
  $(function() {
    $("#accordion").accordion();
  });


  // JQUERY WIDGET: TABS
  $(function() {
    $("#tabs").tabs();
  });


  // JQUERY WIDGET: MENU
  $(function() {
    $("#menu").menu();
  });


  // JQUERY WIDGET: DATEPICKER
  $(function() {
    $("#datepicker").datepicker();
  });


  // IMAGE ROLLOVER
  $("#section_ImageRollover img").each(function() {
    let oldURL = $(this).attr("src"); //gets the SRC attribute
    let newURL = $(this).attr("id"); //gets the ID attribute

    //Preload rollover images
    let rolloverImage = new Image();
    rolloverImage.src = newURL;

    //Setup Event Handlers
    $(this).hover(
      function() {
        $(this).attr("src", newURL); //sets the SRC attribute
      },
      function() {
        $(this).attr("src", oldURL); //sets the SRC attribute
      }
    ); //end HOVER
  }); //end EACH


  // IMAGE SWAP
  //Preload images
  $("#list_ImageSwap a").each(function() {
    let swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  //Setup  event handlers for links
  $("#list_ImageSwap a").click(function(evt) {
    //swap image
    let imageURL = $(this).attr("href");
    $("#main_ImageSwap").attr("src", imageURL);

    //swap caption
    let caption = $(this).attr("title");
    $("#caption_ImageSwap").text(caption);

    //description swap
    let imgSwapDesc = $(this).attr("titleScore");
    $("#imgSwap_Description").text("Nintendo Power Rating: " + imgSwapDesc);

    //cancel the default action of the link
    evt.preventDefault(); //jQuery cross-browser method
  }); //End Click

  //move focus to first thumbnail
  $("li:first-child a").focus();

}); //END READY



// XMLHTTPREQUEST: API FETCH
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {
    latitude,
    longitude,
    altitude,
    velocity
  } = data;

  document.getElementById('lat').textContent = latitude.toFixed(5) + "°";
  document.getElementById('lon').textContent = longitude.toFixed(5) + "°";
  document.getElementById('alt').textContent = altitude.toFixed(5) + "km";
  document.getElementById('vel').textContent = velocity.toFixed(3) + "kmh";
};

setInterval(function() {
  getISS();
}, 2000);
