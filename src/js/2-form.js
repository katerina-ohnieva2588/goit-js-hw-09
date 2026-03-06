const formData = {
email: "",
message: ""
}; 

const form = document.querySelector('.feedback-form'); 

form.addEventListener("input", function(event) {

formData[event.target.name] = event.target.value.trim();
localStorage.setItem("feedback-form-state", JSON.stringify(formData)); 

}); 

const savedData = localStorage.getItem("feedback-form-state");

if (savedData) {
const parsedData = JSON.parse(savedData);


formData.email = parsedData.email || "";
formData.message = parsedData.message || "";

form.querySelector('[name="email"]').value = formData.email;
form.querySelector('[name="message"]').value = formData.message;
} 

form.addEventListener("submit", function(event) {
event.preventDefault(); // зупиняємо стандартну відправку

if (formData.email === "" || formData.message === "") {
alert("Fill please all fields"); // повідомлення про помилку
return;
}

console.log(formData);

localStorage.removeItem("feedback-form-state");

formData.email = "";
formData.message = "";

form.querySelector('[name="email"]').value = "";
form.querySelector('[name="message"]').value = "";
}); 