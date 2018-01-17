(function () {
const getUsername = document.getElementById('human');
const username = document.getElementById('username');
getUsername.addEventListener("click", function sendUsername(evt) {
    evt.preventDefault();
    console.log(username.value);
    const XHR = new XMLHttpRequest();
    XHR.open('POST', '/players');
    XHR.send(JSON.stringify({username: username.value}));
  });
})();

