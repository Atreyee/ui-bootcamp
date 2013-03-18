$(document).ready(function(){
  $("#newPresentation").on("submit", function(event){
    event.preventDefault();
    var values = {};
    values["title"] = $("#name").val();
    values["description"] = $("#description").val();
    $("#presentationContainer").append(_.template($("#presentationTemplate").html(), values));
    $("#addPresentationDialog").modal('hide');
  });
});
