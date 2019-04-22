let form = document.forms[0];
form.addEventListener('submit', function(event, form) {
    if (!name.validate() || !email.validate() || !phone.validate() || !text.validate()) {
        event.preventDefault();
    }
});

let validators = {
    validateLength(min, max, value) {
        return value.length >= min && value.length <= max;
    },
    
    validateForNumber(value) {
        return typeof value === "number" && !isNaN(value);
    },
};

let name = {
    name: 'Имя',
    getField() {
        return document.getElementById('name');
    },
    rules: {
        min: 1,
        max: 50,
    },
    getFieldValue() {
        return this.getField().value;
    },
    validate() {
        let valid = validators.validateLength(this.rules.min, this.rules.max, this.getFieldValue());
        if (!valid) {
            this.showError();
            return false;
        }
        this.setValid();
        return true;
    },
    showError() {
        this.getField().classList.add('invalid');
        document
            .querySelector('.nameError')
            .innerText = `Длина поля ${this.name} должна быть больше ${this.rules.min} и меньше ${this.rules.max}`;
    },
    setValid() {
        let field = this.getField();
        field.classList.remove('invalid')
        field.classList.add('valid');
        document.querySelector('.nameError').style.display = 'none';
    }
};

let email = {
    name: 'Электронная почта',
    getField() {
        return document.getElementById('email');
    },
    rules: {
        min: 1,
        max: 50,
    },
    getFieldValue() {
        return this.getField().value;
    },
    validate() {
        let valid = validators.validateLength(this.rules.min, this.rules.max, this.getFieldValue());
        if (!valid) {
            this.showError();
            return false;
        }
        this.setValid();
        return true;
    },
    showError() {
        this.getField().classList.add('invalid');
        document
            .querySelector('.emailError')
            .innerText = `Длина поля ${this.name} должна быть больше ${this.rules.min} и меньше ${this.rules.max}`;
    },
    setValid() {
        let field = this.getField();
        field.classList.remove('invalid')
        field.classList.add('valid');
        document.querySelector('.emailError').style.display = 'none';
    }
};

let phone = {
    name: 'Телефон',
    getField() {
        return document.getElementById('phone');
    },
    rules: {
        type: "number",
        typeRu: "число",
        length: 11,
    },
    getFieldValue() {
        return this.getField().value;
    },
    validate() {
        let validNumber = validators.validateForNumber(parseInt(this.getFieldValue()));
        let validLength = validators.validateLength(this.rules.length, this.rules.length, this.getFieldValue());
        if (!validNumber || !validLength) {
            this.showError();
            return false;
        }
        this.setValid();
        return true;
    },
    showError() {
        this.getField().classList.add('invalid');
        document
            .querySelector('.phoneError')
            .innerText = `Длина поля ${this.name} должна быть ${this.rules.length} и быть типом ${this.rules.typeRu}`;
    },
    setValid() {
        let field = this.getField();
        field.classList.remove('invalid')
        field.classList.add('valid');
        document.querySelector('.phoneError').style.display = 'none';
    }
};

let text = {
    name: 'Текстовое поле',
    getField() {
        return document.getElementById('text');
    },
    rules: {
        min: 1,
        max: 1000,
    },
    getFieldValue() {
        return this.getField().value;
    },
    validate() {
        let valid = validators.validateLength(this.rules.min, this.rules.max, this.getFieldValue());
        if (!valid) {
            this.showError();
            return false;
        }
        this.setValid();
        return true;
    },
    showError() {
        this.getField().classList.add('invalid');
        document
            .querySelector('.textareaError')
            .innerText = `${this.name} не должно быть пустым`;
    },
    setValid() {
        let field = this.getField();
        field.classList.remove('invalid')
        field.classList.add('valid');
        document.querySelector('.textareaError').style.display = 'none';
    }
};