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
    group: /^([А-ЯҐЄІЇ]{2}+
    faculty: /^[А-ЯҐЄІЇ]{4}$/,
    number: /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
    date: /^([0-9]{2}\.){2}[0-9]{4}$/,
    address: /^м\.\s[А-ЯҐЄІЇ]{1}[а-яґєії]+$/
}





