// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".change-tried").on("click", function(event) {
    var id = $(this).data("id");
    var newTried = $(this).data("newtried");

    console.log(newTried)

    var newTriedState = {
      tried: newTried
    };

    // Send the PUT request.
    $.ajax("/api/recipes/" + id, {
      type: "PUT",
      data: newTriedState
    }).then(
      function() {
        console.log("changed tried to", newTried);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newRecipe = {
      name: $("#recipeName").val().trim(),
      url: $("#recipeURL").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/recipes", {
      type: "POST",
      data: newRecipe
    }).then(
      function() {
        console.log("created new recipe");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-recipe").on("click", function(event) {
    var id = $(this).data("id");

    console.log(id)

    // Send the DELETE request.
    $.ajax("/api/recipes/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted recipe", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
