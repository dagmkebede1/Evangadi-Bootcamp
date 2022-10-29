let body = $("body");

body.append(`<form action="#" method="post">
      <label for="fname">First Name</label>
      <input type="text" id="fname" placeholder="firstname" />
      <label for="sname">Second Name</label>
      <input type="text" id="sname" />
      <label for="email">Email</label>
      <input type="text" id="email" />
      <label for="password">Password</label>
      <input type="password" id="password" />
      <label for="passconfirm">Password Confirm</label>
      <input type="password" id="passconfirm" />
      <input type="submit" value="Register" />
    </form>`);

let form = $("form");
form.on("submit", function (e) {
  e.preventDefault();
  let error = [];
  let disp = $("p");
  disp.text("");
  let firstName = $("#fname");
  let secondName = $("#sname");
  let email = $("#email");
  let password = $("#password");
  let passConfirm = $("#passconfirm");
  let emailValidator = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );
  let strongPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (!firstName.val()) {
    error.push("please enter first name");
  }
  if (!secondName.val()) {
    error.push("please enter second name");
  }
  if (!email.val()) {
    error.push("please enter email address");
  }
  if (!emailValidator.test(email.val())) {
    error.push("please enter a valid email");
  }
  if (!password.val()) {
    error.push("please enter a password");
  }
  if (!passConfirm.val()) {
    error.push("please enter passConfirm");
  }
  if (password.val() !== passConfirm.val()) {
    error.push("passwords are not the same");
  } else if (!strongPassword.test(password)) {
    error.push(
      "password must be at least 8 and must include lowerCase, upperCase and Symbols"
    );
  }

  error.forEach(function (err) {
    let p = $("<p></P>");
    p.text(err);

    body.before(p);
    p.css({
      color: "red",
      textAlign: "center",
    });
  });
});
