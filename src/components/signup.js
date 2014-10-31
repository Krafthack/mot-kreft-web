var m = require('mithril');
var User = require('../models/User');

var texts = {
    title: 'Registrer deg',
    labels: {
        email: 'E-posten din',
        name: 'Navnet ditt',
        password: 'Passordet ditt',
        userType: {
            patient: 'jeg er syk',
            supporter: 'jeg kjenner noen som er syk'
        },
        submit: 'Registrer deg!'
    },
    errors: {
        registrationFailed: 'Vi klarte ikke å registrere deg nå. Prøv igjen senere',
        validation: {
            email: 'Fiks eposten din',
            name: 'Vi vil gjerne vite fornavnet ditt i alle fall!',
            password: 'Vi trenger et passord helst!',
            userType: 'Vi må få lov å vite om du er syk eller ikke'
        }
    }
};

module.exports = {
    controller: function() {
        this.email = m.prop('');
        this.name = m.prop('');
        this.password = m.prop('');
        this.userType = m.prop('');
        this.register = register.bind(this);
        this.validation = m.prop('');
    },
    view: function(ctrl) {
        return m('section', [
            m('h2', {}, texts.title),
            inputField({
                    name: 'name',
                    placeholder: texts.labels.name
                },
                ctrl.name
            ),
            inputField({
                    name: 'email',
                    type: 'email',
                    placeholder: texts.labels.email
                },
                ctrl.email
            ),
            inputField({
                    name: 'password',
                    type: 'password',
                    placeholder: texts.labels.password
                },
                ctrl.password
            ),
            m('div',
                {
                    class: 'userType',
                    style: 'clear: both; overflow: auto;'
                },
                [
                    radioButton({
                        name: 'userType',
                        value: 'patient',
                        label: texts.labels.userType.patient
                    }, ctrl.userType),
                    radioButton({
                        name: 'userType',
                        value: 'supporter',
                        label: texts.labels.userType.supporter
                    }, ctrl.userType)
                ]
            ),
            button({type: 'submit', value: texts.labels.submit, onclick: ctrl.register.bind(ctrl) }),
            m('div', {
                    class: 'validation-error' + ctrl.validation().length ? ' visible' : ' hidden'
                },
                ctrl.validation()
            )
        ]);
    }
};

function inputField(options, val) {
    options.oninput = m.withAttr('value', val);
    options.value = val();
    return m('', [
        m('input', options)
    ]);
}

function radioButton(options, val) {
    options.type = 'radio';
    options.onchange = val();
    return m('', {style: 'float: left;'}, [
        m('input', options),
        m('label', {for: options.id}, options.label)
    ]);
}

function button(options) {
    return m('', [
        m('button', options, options.value)
    ]);
}

function register() {
    var user = new User({ name: this.name(), email: this.email(), password: this.password() });
    var validationErrors = user.validate();
    if(validationErrors) {
        var validationTexts = '<h3>Ops!</h3>';
        for(var i = 0; i < validationErrors.length; i++) {
            validationTexts += texts.errors.validation[validationErrors[i].key] +'<br/>'
        }

        this.validation(m.trust(validationTexts));
        return;
    }

    var that = this;
    user.save().then(function(data) {
        m.route('/');
    }, function(err) {
        that.validation(m.trust(texts.errors.registrationFailed));
    });
}
