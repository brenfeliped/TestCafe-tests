import { ClientFunction } from "testcafe";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CustomerPage from "../pages/CustomerPage";

const dataSet = require('../data/data.json')
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
dataSet.forEach(data =>{
test('User Registration and Login Test', async t => {
    await t
    .click(HomePage.RegistersLink)
    .expect(getURL()).contains('register')
    .click(RegisterPage.GenderOption)
    .typeText(RegisterPage.FirstName,data.firstname)
    .typeText(RegisterPage.LastName,data.lastname);

    await RegisterPage.selectDay(data.birthday);
    await RegisterPage.selectMonth(data.birthmonth);
    await RegisterPage.selectYear(data.birthyear);
    await t
        .typeText(RegisterPage.Email, data.email + randomNumber + "@test.com")
        .typeText(RegisterPage.Password, data.password)
        .typeText(RegisterPage.ConfirmPassword, data.password)
        .click(RegisterPage.RegisterButton)
        .expect(RegisterPage.SucessfulMessage.exists).ok()
        
}) });