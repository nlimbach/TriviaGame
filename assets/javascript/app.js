$(document).ready(function() {


    var intervalId;
    var number = 60;
    var amountCorrect = 0;

    $("#show-number").addClass("text-center");
    $("#show-number").html("<h2>" + number + "</h2>");

    $("#start").on("click", function() {

        run();



        function run() {
            intervalId = setInterval(decrement, 1000);
        }


        function decrement() {
            //  Decrease number by one.
            number--;
            //  Show the number in the #show-number tag.
            $("#show-number").html("<h2>" + number + "</h2>")


            if (number < 0) {
                clearInterval(intervalId);
                $("#show-number").html("<h2>Time Up!!!</h2>")


                for (var i = 1; i < 8; i++) {
                    var radios = document.getElementsByName('group' + i);
                    for (var j = 0; j < radios.length; j++) {
                        var radio = radios[j];
                        if (radio.value == "yes" && radio.checked) {
                            amountCorrect++;
                        }
                    }
                }
                var  incorrectAmount = 7 - amountCorrect;
                $("#show-number").html('<div>Correct Responses:' + amountCorrect +' <br />Incorrect Responses: ' + incorrectAmount +'</div>');

            }
        }


        // only allow user to select one option
        $('#answers input:radio').click(function() {

            $(this).siblings().attr("disabled", "disabled");
        });

        $('#answers2 input:radio').click(function() {

            $(this).siblings().attr("disabled", "disabled");
        });


    })
})
