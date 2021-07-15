import { ClientFunction } from "testcafe";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CustomerPage from "../pages/CustomerPage";


const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 50);
var userEmail = 'Bruce'+randomNumber+'@teste.com'
fixture("Registration Fixture")
    .page(URL);

test('Assert Homes Page Test', async t => {
    await t 
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(HomePage.subtitleHeader.exists).ok();

})

test('User Registration and Login Test', async t => {
    await t
    .click(HomePage.RegistersLink)
    .expect(getURL()).contains('register')
    .click(RegisterPage.GenderOption)
    .typeText(RegisterPage.FirstName,"Bruce")
    .typeText(RegisterPage.LastName,"Lee");

    await RegisterPage.selectDay('5');
    await RegisterPage.selectMonth('November');
    await RegisterPage.selectYear('1980');
    await t
        .typeText(RegisterPage.Email, userEmail)
        .typeText(RegisterPage.Password, '123456')
        .typeText(RegisterPage.ConfirmPassword, '123456')
        .click(RegisterPage.RegisterButton)
        .expect(RegisterPage.SucessfulMessage.exists).ok()
        
})