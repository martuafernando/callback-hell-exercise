const userDB = {
	username: "joke",
	password: "rahasia",
	role: "admin",
};

// Fungsinya untuk cek username === "joko" dan password === "rahasia"
// JIka iya kirim userDB lewat callback
function loginUser(inputUsername, inputPassword, callback) {
	setTimeout(() => {
		if (inputUsername === "joko" && inputPassword === "rahasia") {
			return callback(userDB);
		}

		return;
	}, 500);
}

// Ini hanya mengambil role, tapi lemparnya pakai callback
function getRole(user, callback) {
	setTimeout(() => {
		return callback(user.role);
	}, 500);
}

// Cek role, jika admin lempar "Dashboard admin", jika selain admin lempar "Dashboard"
function getMenu(role, callback) {
	setTimeout(() => {
		if (role === "admin") {
			return callback("Dashboard admin");
		}

		return callback("Dashboard");
	}, 500);
}

loginUser("joko", "rahasia", (user) => {
	getRole(user, (role) => {
		getMenu(role, (menu) => console.log(menu));
	});
});
