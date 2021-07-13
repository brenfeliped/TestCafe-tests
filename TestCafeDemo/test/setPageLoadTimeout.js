fixture('Set page timiout Fixture')
.page("https://devexpress.github.io/testcafe/");

test('set page timiout Test', async t => {
    await t
        .setPageLoadTimeout(0)
        .navigateTo("https://devexpress.github.io/testcafe/");
})
