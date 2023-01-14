const button = document.getElementById('btn');

const formFields = {
    username: document.getElementById('username'),
    group: document.getElementById('group'),
    number: document.getElementById('phone_number'),
    facultet: document.getElementById('fakultet'),
    dateOfBirth: document.getElementById('date_of_birth')
} 

const ruleOfFields = {
    name: /^[А-ЯҐЄІЇ]{1}[а-яґєії]+\s{1}([А-ЯҐЄІЇ]{1}\.){2}$/,
    group: /^\([А-ЯҐЄІЇ]{2}\)-[0-9]{2}$/,
    number: /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
    facultet: /^[А-ЯҐЄІЇ]{4}$/,
    date: /^([0-9]{2}\.){2}[0-9]{4}$/,
}



const checkFields = (field, ruleOfFields, errMsg) => {     
    if (ruleOfFields.test(field.value)) {
        field.classList.remove('error');
        return true;
    } else {
        field.classList.add('error');
        alert(errMsg);
        return false;
    } 
}

const showOutput = () => {
    output.style.display = 'none';
    const { username, group, number, facultet, dateOfBirth } = fields;

    const val1 = checkFields(username, ruleOfFields.name, 'Введіть ПІБ у форматі ТТТТТТ Т.Т.');
    const val2 = checkFields(group, ruleOfFields.group, 'Введіть назву вашої групи у форматі ТТ-ЧЧ');
    const val3 = checkFields(number, ruleOfFields.number, 'Введіть ваш номер телефона у форматі ЧЧЧ-ЧЧЧ-ЧЧ-ЧЧ');
    const val4 = checkFields(facultet, ruleOfFields.facultet, 'Введіть назву вашого факультету у форматі ТТТТ');
    const val5 = checkFields(dateOfBirth, ruleOfFields.date, 'Введіть дату народження у форматі ЧЧ.ЧЧ.ЧЧЧЧ');

    let outputData = `
        <p><span>ПІБ: </span> ${username.value}</p>
        <p><span>Група: </span> ${group.value}</p>
        <p><span>Номер телефону: </span> ${number.value}</p>
        <p><span>Факультет: </span> ${facultet.value}</p>
        <p><span>Дата народження: </span> ${dateOfBirth.value}</p>
    `;

    if (val1 && val2 && val3 && val4 && val5) {
        output.style.display = 'block';
        output.insertAdjacentHTML('beforeend', outputData);
    }
}

button.addEventListener('click', (e) => showOutput());


