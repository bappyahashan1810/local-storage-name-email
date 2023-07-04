const getValueById = (id) => {
    const valueField = document.getElementById(id);
    const valueText = valueField.value;
    valueField.value = '';
    return valueText;
}

const senderName = () => {
    const name = getValueById('name-field');
    // console.log(name);
    localStorage.setItem('name', name);
}

const sendEmail = () => {
    const email = getValueById('email-field');
    // console.log(email);
    localStorage.setItem('email', email);
}

const sendMessage = () => {
    const message = getValueById('message-field');
    localStorage.setItem('message', message);
}

const deleteName = () => {
    localStorage.removeItem('name');
}

const deleteEmail = () => {
    localStorage.removeItem('email');
}

const deleteMessage = () => {
    localStorage.removeItem('message');
}

const reset = () => {
    localStorage.clear();
}