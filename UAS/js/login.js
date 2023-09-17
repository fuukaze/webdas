function validasi() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username != "" && password != "") {
    return true;
  }
  else {
    alert("silahkan masukkan password/username anda")
  }
}
function kembali() {
  location.href = "index.html";
}