var signInContent = '<div id="login-btn" onclick="signIn()">SIGN IN WITH GOOGLE</div>'; 
var signUpContent = '<input id="input-language" placeholder="Enter preferred language"><div id="login-btn" onclick="signUp()">SIGN UP WITH GOOGLE</div>';



$(document).ready(function(){

  $("#tab-login").addClass("selectedTab");
    $("#tab-signup").removeClass("selectedTab");

    $(".login-content").html(signInContent);
  
  $("#tab-login").on("click", function() {
    $("#tab-login").addClass("selectedTab");
    $("#tab-signup").removeClass("selectedTab");

    $(".login-content").html(signInContent);
  });

  $("#tab-signup").on("click", function() {
    $("#tab-signup").addClass("selectedTab");
    $("#tab-login").removeClass("selectedTab");

    $(".login-content").html(signUpContent);
  });

});

$(window).on('load', function(){
  initialiseUI();
});

$(window).on('resize', function(){
  initialiseUI();
});



function initialiseUI() {
  var loginWidth = $(".login-header").width();
  var loginHeight = $(".login-header").height();

  var tabWidth = (loginWidth / 2) - 3;
  var loginContainerHeight = $("#login-container").height();
  var contentHeight = loginContainerHeight - loginHeight;


  $(".login-tab").css({
    'width': tabWidth
  });

  $(".login-content").css({
    'width': loginWidth,
    'height': contentHeight,
  });

  
}

function signIn() {
  console.log("SIGN IN");
  signInWithGoogle();
}

function signUp() {
  console.log("SIGN UP");
}

