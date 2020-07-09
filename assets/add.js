$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newTable = {
      name: $("#name").val().trim(),
      phone: $("#phone-number").val().trim(),
      email: $("#email").val().trim(),
      uniqueId: $("#unique-id").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/tables", newTable)
      .then(function(data) {
        console.log("add.html", data);
        alert("Adding new table...");
      });
  });