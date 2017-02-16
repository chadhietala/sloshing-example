const { writeFileSync } = require('fs');
const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
let ap = 0;

const component = (data) => {
  return `import Ember from 'ember';
  export default Ember.Component.extend({
    name: ${data.name},
    actions: {
      ${data.action}() {
        return
      }
    }
  })
  `
};

const template = () => {
  return `{{name}}-template`
}


for (let i = 0; i < 200; i++) {
  if (ap === 26) {
    ap = 0;
  }

  writeFileSync(`./app/templates/components/component-${i}.hbs`, template());
  writeFileSync(`./app/components/component-${i}.js`, component({
    name: i,
    action: alpha[ap]
  }))

  ap++;
}