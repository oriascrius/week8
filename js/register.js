//  輸入密碼框的眼睛
function register_togglePassword() {
  const register_passwordField = document.getElementById("register_password");
  const register_eyeOpen = document.getElementById("register_eyeOpen");
  const register_eyeClose = document.getElementById("register_eyeClose");
  if (register_passwordField.type === "password") {
    register_passwordField.type = "text";
    register_eyeOpen.style.display = "block";
    register_eyeClose.style.display = "none";
  } else {
    register_passwordField.type = "password";
    register_eyeOpen.style.display = "none";
    register_eyeClose.style.display = "block";
  }
}
// 再次輸入密碼框的眼睛
function register_again_togglePassword() {
  const register_again_passwordField = document.getElementById(
    "register_again_password"
  );
  const register_again_eyeOpen = document.getElementById(
    "register_again_eyeOpen"
  );
  const again_eyeClose = document.getElementById("register_again_eyeClose");
  if (register_again_passwordField.type === "password") {
    register_again_passwordField.type = "text";
    register_again_eyeOpen.style.display = "block";
    register_again_eyeClose.style.display = "none";
  } else {
    register_again_passwordField.type = "password";
    register_again_eyeOpen.style.display = "none";
    register_again_eyeClose.style.display = "block";
  }
}

// 判斷帳號密碼輸入框都有值時，啟用按钮
document.addEventListener("input", function () {
    const register_email = document.getElementById("register_email").value.trim();
    const register_password = document.getElementById("register_password").value.trim();
    const register_again_password = document.getElementById("register_again_password").value.trim();
    const register_submitBtn = document.getElementById("register_submitBtn");

    register_submitBtn.disabled = !(register_email && register_password && register_again_password);
});
