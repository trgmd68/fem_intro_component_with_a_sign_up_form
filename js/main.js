const submitForm = () => {
  const fname = document.getElementById("fname");
  fname.nextElementSibling.classList.remove("active");
  const lname = document.getElementById("lname");
  lname.nextElementSibling.classList.remove("active");
  const email = document.getElementById("email");
  email.nextElementSibling.classList.remove("active");
  const password = document.getElementById("password");
  password.nextElementSibling.classList.remove("active");

  if (!fname.value) {
    fname.nextElementSibling.classList.toggle("active");
  }
  if (!lname.value) {
    lname.nextElementSibling.classList.toggle("active");
  }
  if (!email.value) {
    email.nextElementSibling.classList.toggle("active");
    email.nextElementSibling.textContent = "Email cannot be empty";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    email.nextElementSibling.classList.toggle("active");
    email.nextElementSibling.textContent = "Look like this is not an email!";
  }
  if (!fname.value) {
    password.nextElementSibling.classList.toggle("active");
  }
};
