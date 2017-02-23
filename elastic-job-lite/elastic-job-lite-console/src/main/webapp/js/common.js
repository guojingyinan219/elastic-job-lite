$(function() {
    $("[data-toggle='tooltip']").tooltip()
});

function showSuccessDialog() {
    $("#success-dialog").modal("show");
    setTimeout('$("#success-dialog").modal("hide")', 900);
}

function showFailureDialog(id) {
    $("#" + id).modal("show");
    setTimeout("$('#" + id + "').modal('hide')", 4000);
}

function GetQueryParam(param)
{
    var reg = new RegExp("(^|&)"+ param +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); 
    return null;
}