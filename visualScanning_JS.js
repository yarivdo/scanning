var counter = 0;
var platesLetters = [];
var plateTarget;
var numberOfTargets;
var storeTd=[];
var whichTD;
var startTime;
var myResponses = [];
var responseTime = [];
var trackNumOfTargets = [];



$(document).ready(startHere);

function startHere() {
    populateTable(counter);
    $('#btn').click(transformLetters); // click the Response button
    
    $('td').on('click', function() { // click a cell in the table
        whichTD = $(this).attr('data-cell');
        checkMyResponse(whichTD);
    });
    
    $('#btnNone').click(noneBtnClicked);
    
}


function populateTable(count) {
    if (count == 0) {
        platesLetters = ["X", "X", "X", "X", "X", "D", "C", "D", "C", "D", "D", "D", "G", "D", "Q", "G", "C", "G", "G", "D", "G", "D", "D", "D", "C", "C", "D", "Q", "C", "D", "44", "44", "44", "44", "44", "44"];
        plateTarget = "X";
        numberOfTargets = 5;
        
    } else if (count ==1) {
        platesLetters = [ "GX", "Q", "D", "C", "C", "Q", "Q", "D", "G", "G", "C", "C", "G", "C", "D", "Q", "C", "G", "D", "Q", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GX';
        numberOfTargets = 1;
        
    } else if (count ==2) {
        platesLetters = ["GX", "C", "Q", "Q", "C", "D", "G", "G", "C", "D", "Q", "C", "D", "C", "G", "Q", "D", "G", "C", "C", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GX' ;
        numberOfTargets = 1;
        
    } else if (count ==3) {
        platesLetters = [ "GO", "GO", "GO", "GO", "GO", "C", "G", "D", "C", "C", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"];
        plateTarget= 'GO';
        numberOfTargets = 5 ;
        
    } else if (count ==4) {
        platesLetters = ["GX", "C", "D", "G", "Q", "C", "G", "C", "Q", "G", "Q", "G", "G", "G", "D", "C", "Q", "D", "G", "Q", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GX' ;
        numberOfTargets = 1;
        
    } else if (count ==5) {
        platesLetters = ["GX", "GX", "GX", "GX", "GX", "G", "D", "Q", "D", "Q", "G", "Q", "G", "Q", "D", "Q", "G", "Q", "G", "C", "D", "Q", "Q", "Q", "D", "D", "Q", "C", "G", "C", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GX';
        numberOfTargets = 5;
        
    } else if (count ==6) {
        platesLetters = ["C", "C", "Q", "Q", "G", "D", "G", "G", "C", "C", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'X' ;
        numberOfTargets = 0 ;
        
    } else if (count ==7) {
        platesLetters = [  "C", "C", "G", "C", "G", "G", "G", "G", "G", "D", "Q", "Q", "C", "Q", "G", "Q", "C", "D", "D", "C", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"];
        plateTarget= 'O' ;
        numberOfTargets = 0;
        
    } else if (count ==8) {
        platesLetters = ["O", "O", "O", "O", "O", "G", "G", "D", "Q", "D", "C", "Q", "D", "Q", "G", "G", "G", "D", "D", "D", "G", "G", "G", "G", "Q", "D", "D", "C", "Q", "D", "44", "44", "44", "44", "44", "44"  ];
        plateTarget= 'O';
        numberOfTargets = 5 ;
        
    } else if (count ==9) {
        platesLetters = [ "X", "D", "C", "C", "Q", "Q", "G", "C", "G", "G", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"];
        plateTarget= 'X';
        numberOfTargets = 1 ;
        
    } else if (count ==10) {
        platesLetters = ["O", "O", "O", "O", "O", "Q", "Q", "G", "Q", "Q", "G", "D", "D", "D", "Q", "D", "Q", "D", "D", "D", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'O' ;
        numberOfTargets = 5;
        
    } else if (count ==11) {
        platesLetters = [ "C", "C", "D", "Q", "C", "Q", "D", "Q", "C", "D", "Q", "C", "C", "C", "Q", "D", "Q", "G", "C", "C", "D", "C", "C", "Q", "G", "Q", "Q", "Q", "Q", "C", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'O' ;
        numberOfTargets = 0 ;
        
    } else if (count ==12) {
        platesLetters = ["G", "Q", "G", "G", "D", "D", "G", "G", "D", "D", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"  ];
        plateTarget= 'GX' ;
        numberOfTargets = 0;
        
    } else if (count ==13) {
        platesLetters = [ "X", "D", "Q", "D", "G", "D", "G", "G", "C", "Q", "C", "G", "C", "Q", "G", "G", "C", "C", "G", "Q", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'X' ;
        numberOfTargets = 1;
        
    } else if (count ==14) {
        platesLetters = [ "O", "O", "O", "O", "O", "C", "D", "C", "D", "C", "Q", "D", "D", "Q", "C", "C", "G", "Q", "G", "Q", "D", "Q", "Q", "D", "D", "G", "G", "D", "G", "G", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'O';
        numberOfTargets = 5 ;
        
    } else if (count ==15) {
        platesLetters = [ "O", "O", "O", "O", "O", "C", "C", "C", "C", "Q", "G", "G", "Q", "Q", "C", "C", "D", "C", "D", "D", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"  ];
        plateTarget= 'O';
        numberOfTargets = 5 ;
        
    } else if (count ==16) {
        platesLetters = [ "O", "C", "Q", "D", "D", "C", "C", "G", "D", "C", "C", "G", "Q", "Q", "Q", "G", "C", "G", "D", "C", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'O';
        numberOfTargets = 1;
        
    } else if (count ==17) {
        platesLetters = [ "D", "D", "Q", "Q", "G", "Q", "Q", "D", "Q", "D", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"];
        plateTarget= 'X';
        numberOfTargets = 0 ;
        
    } else if (count ==18) {
        platesLetters = [ "GO", "GO", "GO", "GO", "GO", "Q", "D", "D", "Q", "Q", "C", "D", "G", "Q", "C", "G", "Q", "Q", "G", "Q", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"  ];
        plateTarget= 'GO';
        numberOfTargets = 5 ;
        
    } else if (count ==19) {
        platesLetters = [ "X", "X", "X", "X", "X", "G", "Q", "Q", "G", "C", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"];
        plateTarget= 'X' ;
        numberOfTargets = 5 ;
        
    } else if (count ==20) {
        platesLetters = [ "Q", "Q", "G", "G", "Q", "Q", "D", "C", "G", "G", "G", "D", "D", "G", "G", "G", "C", "D", "Q", "C", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GO' ;
        numberOfTargets = 0 ;
        
    } else if (count ==21) {
        platesLetters = [  "GX", "Q", "D", "C", "C", "Q", "Q", "D", "G", "G", "C", "C", "G", "C", "D", "Q", "C", "G", "D", "Q", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GX';
        numberOfTargets = 1 ;
        
    } else if (count ==22) {
        platesLetters = [ "G", "G", "D", "C", "Q", "Q", "Q", "C", "D", "Q", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44"];
        plateTarget='GO' ;
        numberOfTargets = 0 ;
        
    } else if (count ==23) {
        platesLetters = ["C", "Q", "G", "C", "C", "G", "G", "Q", "C", "G", "Q", "G", "Q", "Q", "Q", "Q", "Q", "C", "D", "G", "G", "Q", "D", "G", "C", "Q", "C", "C", "G", "C", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'X';
        numberOfTargets = 0;
        
    } else if (count ==24) {
        platesLetters = [ "Q", "C", "G", "C", "D", "G", "G", "Q", "D", "C", "D", "C", "C", "C", "Q", "Q", "G", "G", "D", "D", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'O';
        numberOfTargets = 0 ;
        
    } else if (count ==25) {
        platesLetters = ["Q", "Q", "Q", "C", "G", "Q", "D", "Q", "Q", "D", "D", "Q", "G", "Q", "D", "Q", "C", "C", "C", "Q", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GX';
        numberOfTargets = 0 ;
        
    } else if (count ==26) {
        platesLetters = [ "O", "G", "C", "Q", "G", "Q", "D", "Q", "Q", "G", "Q", "C", "D", "Q", "D", "Q", "C", "C", "Q", "C", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'O';
        numberOfTargets = 1 ;
        
    }else if (count ==27) {
        platesLetters = ["C", "G", "G", "C", "G", "Q", "C", "D", "Q", "D", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'X';
        numberOfTargets = 0 ;
        
    } else if (count ==28) {
        platesLetters = ["G", "D", "D", "Q", "G", "G", "D", "C", "Q", "C", "G", "D", "D", "D", "C", "C", "Q", "Q", "Q", "Q", "C", "C", "G", "D", "D", "C", "Q", "C", "G", "G", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'O';
        numberOfTargets = 0;
        
    } else if (count ==29) {
        platesLetters = [  "GX", "GX", "GX", "GX", "GX", "D", "Q", "C", "Q", "D", "C", "C", "D", "D", "D", "C", "Q", "Q", "D", "G", "Q", "G", "D", "Q", "G", "C", "G", "G", "G", "C", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GX' ;
        numberOfTargets = 5 ;
        
    } else if (count ==30) {
        platesLetters = ["O", "D", "G", "Q", "Q", "D", "Q", "Q", "G", "G", "Q", "C", "G", "Q", "D", "D", "D", "Q", "D", "Q", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'O';
        numberOfTargets = 1;
        
    } else if (count ==31) {
        platesLetters = ["C", "G", "Q", "D", "G", "Q", "C", "C", "Q", "G", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44", "44" ];
        plateTarget= 'GX';
        numberOfTargets = 0;
        
    } else if (count ==32) {
        platesLetters = [ "X", "Q", "Q", "C", "C", "D", "G", "Q", "Q", "G", "D", "G", "C", "Q", "Q", "C", "C", "G", "C", "D", "D", "D", "C", "G", "D", "C", "G", "G", "G", "C", "44", "44", "44", "44", "44", "44"];
        plateTarget= 'X' ;
        numberOfTargets =1 ;

    } else {
        // ------- FINISH THE TEST HERE ---------------
    }


    
    
    
    // Now to populate the table
    for (i=0; i<36; i++) {
        var myLength = platesLetters.length -1;
        var cellChosen = Math.floor((Math.random() * myLength) + 0);
        var cell = '#td' + i;
        if (platesLetters[cellChosen] == "44") {
            $(cell).html(' ');
        } else if (platesLetters[cellChosen] == "GX") {
            $(cell).css('color', 'green');
            $(cell).html('X');
        } else if (platesLetters[cellChosen] == "GO"){
            $(cell).css('color', 'green');
            $(cell).html('O');
            
        } else {
            $(cell).html(platesLetters[cellChosen]);
            $(cell).css('color', 'white');
        }
        
        platesLetters.splice(cellChosen, 1);
    }
    
    //Present the target
    $('#thisTarget').html(plateTarget);
    if (plateTarget == "GX") {
        $('#thisTarget').css('color', 'green');
        $('#thisTarget').html('X');
    } else if (plateTarget == "GO") {
        $('#thisTarget').css('color', 'green');
        $('#thisTarget').html('O');
    }else {
        $('#thisTarget').css('color', 'white');
    }
    
    //Make sure the cursor dissapears above the Table area and hide NONE button
    $('table').css('cursor', 'none');
    $('#btnNone').hide();
    // And finally - start the clock
    startTime = Date.now();
}

function transformLetters() {
    // Start with replacing each leter with a Circle
    // And as each table is randomly arranged, we need to store the
    // various letters in their position for the next click event
    
    // We'll start by emptying the relevant aray
    storeTd = [];
    $('td').each (function() {
        var thisContent = $(this).html();
        storeTd.push(thisContent);
        
        if (thisContent !=' ') { // replace all char with a circle, unless it's SPACE
            $(this).html('*');
            $(this).css('color', 'white');
        }
    });
    //Bring back the cursor and the NONE button
    $('table').css('cursor', 'pointer');
    $('#btnNone').show();
}

function checkMyResponse(myTD) {
    //STOP the clock
    var finishTime = Date.now();
    // Check response
    if (plateTarget == storeTd[myTD] || plateTarget.slice(1) == storeTd[myTD]) {
        myResponses.push(true);
        console.log('Correct');
    } else {
        myResponses.push(false);
        console.log('Nope');
    }
    
    //Document time
    var totalTime = finishTime-startTime;
    responseTime.push(totalTime);
    trackNumOfTargets.push(numberOfTargets);
    
    // on to the next plate
    counter++;
    populateTable(counter);
    
}

function noneBtnClicked() {
    // Stop the clock
    var finishTime = Date.now();
    // Check validity of response
    if (numberOfTargets == 0) {
        console.log('correct');
        myResponses.push(true);        
    } else {
        myResponses.push(false);
        console.log('Nope');
    }
    // Document time
    var totalTime = finishTime-startTime;
    responseTime.push(totalTime);
    trackNumOfTargets.push(numberOfTargets);
    
    // on to the next plate
    counter++;
    populateTable(counter);
    
}