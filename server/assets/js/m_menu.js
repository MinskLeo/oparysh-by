$("document").ready(() => {
  const checkbox = $("#m_btn");
  console.log(checkbox);
  checkbox.change(function() {

       if (checkbox.prop( "checked" ) == true) {
        $('#toggle').show("slow");
      } else {
        $('#toggle').hide("slow");
      };

    });
});
