window.onload = () => {
    console.log("Loadddded");

    if(localStorage.getItem('session')){
        user = JSON.parse(localStorage.getItem("session")).user;
        console.log("Da co user su dung");
        document.getElementById('new_session_container').style.display = "none";
        document.getElementById('name_user').innerHTML = user.name;
    }else{
        console.log("Phai dang nhap/ dang kys");
        document.getElementById('new_session_container').style.display = "block";
        document.getElementsByClassName('user_info')[0].style.visibility = "hidden";
    }
}

var User = function (name, email, phone, pass) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.pass = pass;
}
var arr = [];
document.getElementById('save').onclick = function () {
    let txtname = document.querySelector('input[name="name"]').value;
    let txtmail = document.querySelector('input[name="email"]').value;
    let txtphone = document.querySelector('input[name="phone"]').value;
    let txtpass = document.querySelector('input[name="pass"]').value;

    var user = new User(txtname, txtmail, txtphone, txtpass);
    arr.push(user);
    localStorage.setItem('users', JSON.stringify(arr));
}

document.getElementById('login').onclick = function () {
    let submail = document.querySelector("input[name='sub_email']").value;
    let subpass = document.querySelector("input[name='sub_pass']").value;

    list_users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem("users")) : [];

    user_login = null;
    list_users.forEach((current_user) => {
        if (current_user.email === submail && current_user.pass === subpass)
            user_login = current_user;
    })

    if(user_login){
        console.log("Sign in");
        localStorage.setItem('session', JSON.stringify({"user": user_login, status: "Signing"}));
        window.location.reload();
    }else {
        console.log("Unlogin");
    }
}

document.getElementById('ava').onclick = () => {
    document.getElementsByClassName('action_user')[0].style.display = "block";
}

document.getElementById('sign-out').onclick = () => {
    localStorage.removeItem('session');
    window.location.reload();
}