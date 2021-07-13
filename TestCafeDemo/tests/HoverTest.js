fixture("Hover Fixture")
.page("https://devexpress.github.io/testcafe/")


test('Hover test', async t => {
    await t
        .setTestSpeed(0.01)
        .hover('inout#populate');
})