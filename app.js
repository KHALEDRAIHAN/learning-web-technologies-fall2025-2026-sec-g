const app = document.getElementById("app");

function createLoginForm() {
    app.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = "Login";
    card.appendChild(title);

    createField(card, "Username", "loginUsername", "text");

    let labelRole = document.createElement("label");
    labelRole.textContent = "Role";
    let roleSelect = document.createElement("select");
    roleSelect.id = "loginRole";

    ["General Member", "Executive", "Admin"].forEach(r => {
        let option = document.createElement("option");
        option.value = r.toLowerCase();
        option.textContent = r;
        roleSelect.appendChild(option);
    });

    card.appendChild(labelRole);
    card.appendChild(roleSelect);

    createField(card, "Password", "loginPassword", "password");

    let loginBtn = document.createElement("button");
    loginBtn.textContent = "Login";
    card.appendChild(loginBtn);

    let toggle = document.createElement("div");
    toggle.className = "toggle";
    toggle.innerHTML = `Don't have an account? <a href="#" onclick="createRegisterForm()">Register</a>`;
    card.appendChild(toggle);

    app.appendChild(card);
}

function createRegisterForm() {
    app.innerHTML = "";

    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = "Register";
    card.appendChild(title);

    createField(card, "Name", "regName", "text");
    createField(card, "Student ID", "regId", "text");
    createField(card, "Email", "regEmail", "email");
    createField(card, "Password", "regPassword", "password");

    let vLabel = document.createElement("label");
    vLabel.textContent = "Email Verification Code";
    let vInput = document.createElement("input");
    vInput.type = "text";
    vInput.id = "verifyCode";

    let sendCodeBtn = document.createElement("button");
    sendCodeBtn.textContent = "Send Verification Code";

    card.appendChild(vLabel);
    card.appendChild(vInput);
    card.appendChild(sendCodeBtn);

    let regBtn = document.createElement("button");
    regBtn.textContent = "Register";
    card.appendChild(regBtn);

    let toggle = document.createElement("div");
    toggle.className = "toggle";
    toggle.innerHTML = `Already have an account? <a href="#" onclick="createLoginForm()">Login</a>`;
    card.appendChild(toggle);

    app.appendChild(card);
}

function createField(parent, labelText, id, type) {
    let label = document.createElement("label");
    label.textContent = labelText;

    let input = document.createElement("input");
    input.type = type;
    input.id = id;

    parent.appendChild(label);
    parent.appendChild(input);
}

createLoginForm();
