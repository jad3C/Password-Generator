const generatePasswordBtn = document.querySelector(".generate-password");
const passwordDisplayOne = document.querySelector(".password-display-one");
const passwordDisplayTwo = document.querySelector(".password-display-two");

const copyPassDisplayOneBtn = document.querySelector(".svg-one");
const copyPassDisplayTwoBtn = document.querySelector(".svg-two");

const generatePasswords = () => {
	let characters =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";

	let result1 = "";
	let result2 = "";

	for (let i = 0; i < 16; i++) {
		result1 += characters[Math.floor(Math.random() * characters.length)];
		passwordDisplayOne.textContent = result1;
	}

	for (let i = 0; i < 16; i++) {
		result2 += characters[Math.floor(Math.random() * characters.length)];
		passwordDisplayTwo.textContent = result2;
	}
};

generatePasswordBtn.addEventListener("click", generatePasswords);

async function copyPassword(passwordText) {
	try {
		await navigator.clipboard.writeText(passwordText);
		alert("Input text copied to clipboard!");
	} catch (err) {
		console.error("Failed to copy input text: ", err);
		alert("Failed to copy input text.");
	}
}

copyPassDisplayOneBtn.addEventListener("click", () => {
	passwordText = passwordDisplayOne.textContent;
	copyPassword(passwordText);
});

copyPassDisplayTwoBtn.addEventListener("click", () => {
	passwordText = passwordDisplayTwo.textContent;
	copyPassword(passwordText);
});
