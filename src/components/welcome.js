var m = require('mithril');
var User = require('../models/User');
var Mood = require('../models/Mood');
var error = require('../common/error');

var text = {
  info: "Velkommen til en krafthack mot kreft - webutviklings utgaven!",
  abouthack: "I dag handler det om å lage funksjonalitet i en webapplikasjon - nærmere bestemt en Mithril app. For å få til dette har vi satt opp et API, full integrasjon med APIet i modellaget til webapplikasjonen og lagd noen eksempler for dere som er helt ferske med Mithril.",
  todo: "Oppgaver og ressurser ligger i Readme filen til dette repoet. For spørsmål, huk tak i Frode eller Ken!"
};


module.exports = {
  controller: function () {
    this.health = new health.controller();
  },
  view: function (ctrl) {
    return m("section.c-welcome", [
      m("p.typo-info", text.info),
      m("p", text.abouthack),
      m("p", text.todo),
      health.view(ctrl.health)
    ]);
  }
};


var health = {
  controller: function () {
    this.health = m.prop("pending");
    checkStatusInterval(this.health);
  },
  view: function (ctrl) {
    return m(".u-box", {
      class: ctrl.health()
    }, "Api connection is "+ ctrl.health());
  }
};

function checkStatusInterval(status) {
  setInterval(function () {
    User.get().then(function (res) {
      status(res.success ? "ok" : "pending");
    }, function (error) {
      status("error");
    });
  }, 3000);
}
