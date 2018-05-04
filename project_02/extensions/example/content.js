// replace images when the page loads
$('img').attr('src', 'https://i.imgur.com/8QMMdNv.jpg');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/@/g,'$') );
});

// when you click on an image hide it using CSS
$('img').click(function() {
	$(this).addClass('hide');
});

//content script
document.onreadystatechange = function () {
if (document.readyState == "complete") {
    // Grab the UI frmo the mainpage you want to append the save functionality
    var someElementsYouWantToAppendASaveButtonTo = document.getElementsByTagName("...");

    var len = someElementsYouWantToAppendASaveButtonTo.length;
    for (var i = 0; i < len; i++) { 
        // Create a UI save button to provide a functionality
        var theSaveButton = document.createElement("button");
        theSaveButton.value = "Save to Chrome Extension";

        // Send data to extension when clicked
        theSaveButton.addEventListener("click", function() {
            var dataToSentToExtension = {...} // Retrieve from the clicked element, or whatever you want to save
            chrome.extension.sendMessage(dataToSentToExtension, function(response) {
                if(response.success) console.log("Saved successfully");
                else console.log("There was an error while saving")
            });
        }, false); 

        someElementsYouWantToAppendASaveButtonTo[i].appendChild(theSaveButton)
    }
}
}



