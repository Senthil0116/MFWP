
// <script type="text/javascript">
// var h1 = "Hi, Welcome to my webpage!";
// alert(h1);
// var name = "...This website is dedicated to my beloved wife Rukmony,our lovely children Aswin,Abirami,Pranav,our honourable parents and our family members.";
// alert(name);
function reg() {
    alert("Please enter your details in registration form and click Register");
}
function login() {
    alert("Successfully logged in");
}

function register() {
    var name = document.getElementById("name").value;
    console.log(name)
    alert("Welcome " + name + "!" + "\n" + "Thank you for registered with us");
    document.getElementById("getname").textContent = name;
}
register()
// </script>