import {Selector} from 'testcafe';

const triedCheckBox = Selector('label').withText("I have tried TestCafe");
const slider = Selector("#slider");

fixture('Drag Test')
.page('https://devexpress.github.io/testcafe/example/');

test('Drag TestCase', async t => {
    await t
        .setTestSpeed(0.01)
        .click(triedCheckBox)
        .drag(slider, 360,0,{ofssetX:10, offsetY:10})
})