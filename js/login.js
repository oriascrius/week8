// 輸入密碼框的眼睛
function login_togglePassword() {
    const login_passwordField = document.getElementById('login_password');
    const login_eyeOpen = document.getElementById('login_eyeOpen');
    const login_eyeClose = document.getElementById('login_eyeClose');
    if (login_passwordField.type === 'password') {
        login_passwordField.type = 'text';
        login_eyeOpen.style.display = 'block';
        login_eyeClose.style.display = 'none';
    } else {
        login_passwordField.type = 'password';
        login_eyeOpen.style.display = 'none';
        login_eyeClose.style.display = 'block';
    }
}
// 判斷帳號密碼輸入框都有值時，啟用按钮
document.addEventListener("input", function () {
    const login_email = document.getElementById("login_email").value.trim();
    const login_password = document.getElementById("login_password").value.trim();
    const login_submitBtn = document.getElementById("login_submitBtn");

    login_submitBtn.disabled = !(login_email && login_password);  // 当 email 和 password 都有值时，启用按钮
});