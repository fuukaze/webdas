function validasi() {
  var nama = document.getElementById("nama").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  if (nama != "" && username != "" && password != "" && email != "") {
    return true
  } else {
    alert('Anda harus mengisi data dengan lengkap !');
  }
}
function kembali() {
  location.href = "index.html";
}