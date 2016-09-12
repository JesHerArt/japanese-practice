$(document).ready(function() {

    console.log("js is loading");

    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('body').css('min-height', windowHeight);
    }

    setHeight();

    $(window).resize(function() {
        setHeight();
    });

    //standard
    var alphabet1 = ['a','i','u','e','o'];
    var alphabet2 = ['ka','ki','ku','ke','ko'];
    var alphabet3 = ['sa','shi','su','se','so'];
    var alphabet4 = ['ta','chi','tsu','te','to'];
    var alphabet5 = ['na','ni','nu','ne','no'];
    var alphabet6 = ['ha','hi','fu','he','ho'];
    var alphabet7 = ['ma','mi','mu','me','mo'];
    var alphabet8 = ['ya','yu','yo'];
    var alphabet9 = ['ra','ri','ru','re','ro'];
    var alphabet10 = ['wa','wo','n'];

    //diacritical marks
    var alphabet11 = ['ga','gi','gu','ge','go'];
    var alphabet12 = ['za','ji','zu','ze','zo'];
    var alphabet13 = ['da','ji','zu','de','do'];
    var alphabet14 = ['ba','bi','bu','be','bo'];
    var alphabet15 = ['pa','pi','pu','pe','po'];

    //Contracted Sounds
    var alphabet16 = ['kya','kyu','kyo'];
    var alphabet17 = ['sha','shu','sho'];
    var alphabet18 = ['cha','chu','cho'];
    var alphabet19 = ['nya','nyu','nyo'];
    var alphabet20 = ['hya','hyu','hyo'];
    var alphabet21 = ['mya','myu','myo'];
    var alphabet22 = ['rya','ryu','ryo'];
    var alphabet23 = ['gya','gyu','gyo'];
    var alphabet24 = ['gya','gyu','gyo'];
    var alphabet25 = ['ja','ju','jo'];
    var alphabet26 = ['bya','byu','byo'];
    var alphabet27 = ['pya','pyu','pyo'];


    //this one not to be used yet
    //these the extra katana ones
    var alphabet28 = ['she','che','je','wi','we','wo','tsa','tsi','tse','tso','ti','fa','fi','fyu','fe','fo','di','dyu','va','vi','vu','ve','vo'];

    var numOfAlphabets;
    var gameType;
    var alphabetObect;
    var gameAlphabet = [];
    var gameAlphabetLength;
    var randomNumber;
    var usedNumbers = [];

    $('#standard').click(function(e){
        e.preventDefault();

        $('#gameType').addClass('hide');
        $('#game').removeClass('hide');
        gameType = "standard";
        gameTypeSelected();

    });

    $('#diacritical').click(function(e){
        e.preventDefault();

        $('#gameType').addClass('hide');
        $('#game').removeClass('hide');
        gameType = "diacritical";
        gameTypeSelected();

    });

    $('#all').click(function(e){
        e.preventDefault();

        $('#gameType').addClass('hide');
        $('#game').removeClass('hide');
        gameType = "all";
        gameTypeSelected();

    });

    function gameTypeSelected() {

        if ( gameType == "standard" ) {

            $('#gameTypePlaying').html("Standard");

            alphabetObject = {
                'alphabets' : [
                                alphabet1,alphabet2,alphabet3,alphabet4,alphabet5,alphabet6,alphabet7,alphabet8,alphabet9,alphabet10
                            ]
            };

            numOfAlphabets = alphabetObject.alphabets.length;

        } else if ( gameType == "diacritical" ) {

            $('#gameTypePlaying').html("Standard + Diacritical");

            alphabetObject = {
                'alphabets' : [
                                alphabet1,alphabet2,alphabet3,alphabet4,alphabet5,alphabet6,alphabet7,alphabet8,alphabet9,alphabet10,alphabet11,alphabet12,alphabet13,alphabet14,alphabet15
                            ]
            };

            numOfAlphabets = alphabetObject.alphabets.length;

        } else if ( gameType == "all" ) {

            $('#gameTypePlaying').html("Includes all letters");

            alphabetObject = {
                'alphabets' : [
                                alphabet1,alphabet2,alphabet3,alphabet4,alphabet5,alphabet6,alphabet7,alphabet8,alphabet9,alphabet10,alphabet11,alphabet12,alphabet13,alphabet14,alphabet15,alphabet16,alphabet17,alphabet18,alphabet19,alphabet20,alphabet21,alphabet22,alphabet23,alphabet24,alphabet26,alphabet27
                            ]
            };

            numOfAlphabets = alphabetObject.alphabets.length;

        }

        for ( var i = 0; i < numOfAlphabets; i++ ) {

            //console.log( alphabetObject.alphabets[i] );

            for ( var j = 0; j < alphabetObject.alphabets[i].length; j++ ) {

                //console.log(alphabetObject.alphabets[i][j]);
                gameAlphabet.push(alphabetObject.alphabets[i][j]);

            }

        }

        gameAlphabetLength = gameAlphabet.length;

        console.log( gameAlphabet );
        console.log( "length: " + gameAlphabet.length );

    }


    $('#newLetter').click(function(e){
        e.preventDefault();

        console.log("button clicked");
        randomNumber = Math.floor((Math.random() * gameAlphabetLength) + 1) - 1;
        console.log(randomNumber);
        console.log(gameAlphabet[randomNumber]);

        var inArray = $.inArray(randomNumber, usedNumbers);

        while( inArray != -1 ) {
            randomNumber = Math.floor((Math.random() * gameAlphabetLength) + 1) - 1;
            inArray = $.inArray(randomNumber, usedNumbers);
            console.log("inside while loop");
            console.log(randomNumber);
        }

        usedNumbers.push(randomNumber);
        console.log("used numbers: " + usedNumbers);

        $('#letter').html(gameAlphabet[randomNumber]);

        if (usedNumbers.length == gameAlphabetLength ) {
            //$('#newLetter').attr("disabled", "disabled");
            console.log(usedNumbers.length);

            $('#gameComplete').removeClass('hide');
            $('#restart').removeClass('hide');
            $('#newLetter').addClass('hide');

        }

    });

    $('#restart').click(function(e){
        e.preventDefault();
        location.reload();
    });

});
