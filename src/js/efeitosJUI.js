$(function () {
  function runEffect() {
    //jqueryUI     
    // $(function () {
    //   $(document).tooltip();
    // });
    // var selectedEffect = $("#effectTypes2").val();
    var selectedEffect = 'bounce';
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "transfer") {
      options = { to: "#button2", className: "ui-effects-transfer" };
    } else if (selectedEffect === "size") {
      options = { to: { width: 200, height: 60 } };
    }

    // Run the effect
    $("#effect2").effect(selectedEffect, options, 500, callback);
  };

  // Callback function to bring a hidden box back
  function callback() {
    setTimeout(function () {
      $("#effect2").removeAttr("style").hide().fadeIn();
    }, 1000);
  };

  // Set effect from select menu value
  $("#button2").on("mouseenter", function () {
    runEffect();
    return false;
  });
});
