function otherProjectsHTML() {

  let $textbox = $("<div>").attr( "id", "textbox" );
  let $imagebox = $("<div>").attr( "id", "imagebox" );

  $("#mainContent").append( $textbox, $imagebox );

  for ( let i = 0; i < 2; i ++ ) {
    let $projectElement = $("<div>");
    $projectElement.addClass("projectElement");
    $projectElement.attr("id", "project" + i);
    $("#mainContent").append( $projectElement );
  }

}