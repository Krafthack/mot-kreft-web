var m = require('mithril');
var User = require('../models/User');

var texts = {
    title: 'Registrer deg',
    labels: {
        email: 'E-posten din',
        name: 'Navnet ditt',
        password: 'Passordet ditt',
        submit: 'Registrer deg!'
    },
    errors: {
        registrationFailed: 'Vi klarte ikke å registrere deg nå. Prøv igjen senere',
        validation: {
            email: 'Fiks eposten din',
            name: 'Vi vil gjerne vite fornavnet ditt i alle fall!',
            password: 'Vi trenger et passord helst!'
        }
    }
};

module.exports = {
    controller: function() {
        this.email = m.prop('');
        this.name = m.prop('');
        this.password = m.prop('');
        this.register = register.bind(this);
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
            button({type: 'submit', value: texts.labels.submit, onclick: ctrl.register.bind(ctrl) })
        ]);
    }
};

function inputField(options, val) {
    options.oninput = m.withAttr('value', val)
    options.value = val();
    return m('', [
        m('input', options)
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
        console.log('validation error - exiting');
        return;
    }
    
    user.save().then(function(data) {
        // TODO: Set user as logged in
        // TODO: Redirect user to frontpage
        m.route('/');
    }, function(err) {
        // TODO: Update error view with error warning
        console.log('error while saving!', err);
    });
}
