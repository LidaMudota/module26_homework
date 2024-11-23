const fetchData = require('./fetchData');

test('resolves to peanut butter', async () => {
    const data = await fetchData(true);
    expect(data).toBe('peanut butter');
});

test('rejects with error', async () => {
    await expect(fetchData(false)).rejects.toBe('error');
});
