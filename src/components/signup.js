var m = require('mithril');
var User = require('../models/User');

var texts = {
    title: 'Registrer deg',
    labels: {
        email: 'E-post',
        password: 'Passord',
        submit: 'Registrer deg!'
    }
};

module.exports = {
    controller: function() {
        this.email = m.prop('');
        this.password = m.prop('');
        this.register = register.bind(this);
    },
    view: function(ctrl) {
        return m('section', [
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
    var user = new User({ email: this.email(), password: this.password() });
    user.save().then(function(data) {
        // TODO: Set user as logged in
        // TODO: Redirect user to frontpage
        console.log('success!', data);
    }, function(err) {
        // TODO: Update error view
        console.log('error!', err);
    });
}
