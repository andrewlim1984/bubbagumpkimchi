var ref = new Firebase("https://bubba-gump-kimchi.firebaseio.com");
var authClient = new FirebaseSimpleLogin(ref, function(error, user) {
  if (error) {
    console.log(error);
    return;
  }
  if (user) {
    console.log(user + " is logged in.");
  } else {
    console.log("user is logged out.");
  }
});
authClient.login('password', {
	email: 'andrewlim1984@gmail.com',
	password: 'test'
});

var email = $("#email").val();
var password = $("#password").val();
authClient.createUser(email, password, function(error,  user) {
  if (!error) {
    console.log('User Id: ' + user.id + ', Email: ' + user.email);
  } else {
    console.log(error);
  }
});