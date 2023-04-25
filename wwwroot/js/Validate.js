


var fName;
var lName;
var mNumber
var isValid = true;


$('#btnSubmit').on('click', function () {
    if (CheckValidation() == false) {
        return false;
    }
});

$('#myform').on('change', function () {debugger
    CheckValidation();
});

//$('#firstName, #lastName, #mobileno').on('change', function () {
//    CheckValidation();
//});

function CheckValidation() {
    fName = $('#firstName').val();
    lName = $('#lastName').val();
    mNumber = $('#mobileno').val();
    if (fName == "") {
        $('#errorfName').text('Please enter first name');
        $('#firstName').css('border-color', 'red');
        $('#firstName').focus();
        isValid = false;
    }
    else if (fName.length < 3) {
        $('#errorfName').text('Name length must be minimum 3 characters');
        $('#firstName').focus();
    }
    else {
        $('#errorfName').text('');
        $('#firstName').css('border-color', 'lightgray');
    }
    if (mNumber == "") {
        $('#errorMobile').text('Please enter first name');
        $('#mobileno').css('border-color', 'red');
        $('#mobileno').focus();
        isValid = false;
    }
    else if (mNumber != "" && mNumber.length < 10) {
        $('#errorMobile').text('Mobile number should be 10 digit');
    }
    else {
        $('#errorMobile').text('');
        $('#mobileno').css('border-color', 'lightgray');
    }
    return isValid;

}

$('#firstName').on('keyup', function (e) {
    if (!AvoidSpecialCharacter(e)) {
        $('#firstName').val('');
        $('#errorfName').text('Special character not allowed');
    }
    else {
        $('#errorfName').text('');
    }
});

function AvoidSpecialCharacter(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
}


$('#mobileno').on('keyup', function (e) {
    $('#mobileno').attr("maxlength", "10");
    if (!OnlyNumberAllowed(e)) {
        $('#mobileno').val('');
        $('#errorMobile').text('Only number allowed!');
    }
    else {
        $('#errorMobile').text('');
    }


});

function OnlyNumberAllowed(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 47) && (k < 58));

}

$(document).ready(function () {
    display();

})





function display() {
    var a = 628.63;
    var hours = Math.trunc(a / 60);
    var minutes = a % 60;
    console.log(hours + ":" + minutes);
}

//function ConvertSecondsToHours() {
//    const seconds = 628.63 * 60;
//    var date = new Date(null);
//    date.setSeconds(seconds);
//    var hhmmssFormat = date.toISOString().substr(11, 8);
//    var time = hhmmssFormat.split(':');
//    var fulltime = +time[0] + "h, " + time[1] + "m, " + time[2] + "s, ";
//    console.log(fulltime);
//}
