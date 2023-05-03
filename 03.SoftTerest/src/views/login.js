import { login } from "../api/users.js";

const section = document.getElementById('loginPage');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showLogin(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();
    const fromData = new FormData(from);

    const email = fromData.get('email');
    const password = fromData.get('password');

    await login(email, password);
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}