var user_inputs = [];
var word_score;

document.getElementById("word-entry").addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode == 13) {
    // Trigger the button element with a click
    document.getElementById("submit-button").click();
  }
});


document.getElementById("submit-button").addEventListener("click", function() {
    if (startGame == true) {

        var input_value = document.getElementById("word-entry").value;
        input_value = input_value.toUpperCase();

        var display_text;

        console.log(dictionary.is_word("ABALONES")); // test
        console.log(dictionary.is_word(input_value)); // test

        if (input_value.length > 2 && dictionary.is_word(input_value)) {   
            word_score = calculate_score(input_value.length);
            display_text = "<div>" + input_value + "&emsp;" + word_score + "</div>";
        }
        else {
            word_score = 0;
            display_text = "<div>" + input_value + "&nbsp;&nbsp;&emsp;" + word_score + "</div>";
        }

        // Add to beginning of array
        user_inputs.unshift(display_text); 
 
        // Clear input field
        document.getElementById("word-entry").value = "";
        // Display user's inputted words in word table
        document.getElementById("answer_cell").innerHTML = user_inputs.join("");            
    }
});

function calculate_score(word) {
    
    switch(word) {
        case 3:
        case 4:
            word_score = "&nbsp;&nbsp;" + 1;
            break;
        case 5: 
            word_score = "&nbsp;&nbsp;" + 2;
            break;
        case 6: 
            word_score = "&nbsp;&nbsp;" + 3;
            break;
        case 7: 
            word_score = "&nbsp;&nbsp;" + 5;
            break;
        default:
            word_score = 11;
            break;
    }

    return word_score;
}


