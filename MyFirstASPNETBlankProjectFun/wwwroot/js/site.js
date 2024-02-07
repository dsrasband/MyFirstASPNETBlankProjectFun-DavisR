$('#submitButton').click( function () {
    alert("From=" + $('#textFrom').val() +
        ", Subject=" + $('#textSubject').val() + 
        ", Message=" + $('#textMessage').val());

    $("#imgGanderson").fadeOut("slow");
})