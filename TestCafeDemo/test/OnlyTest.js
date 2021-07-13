fixture("First Fixture")
    .page("http://www.google.com/");

test.only.page("https://devexpress.github.io/testcafe/example/") 
("First Test", async t => {
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button")
});


test.page("https://devexpress.github.io/testcafe/example/") 
("First Test", async t => {
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button")
});