import {Selector,t} from 'testcafe';

class LoginPage{
    constructor() {
        this.emailInput = Selector("#Email");
        this.passwordInput = Selector("#password");
        this.submitButton = Selector("input.button-1.login-button");
        this.accountHeader = Selector("strong").with("Rturning Custumer");
    }
}

export default new LoginPage();