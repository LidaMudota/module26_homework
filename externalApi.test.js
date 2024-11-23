jest.mock('./externalApi'); // Автоматический мок

const getDataFromApi = require('./externalApi');

test('returns mocked data', () => {
    getDataFromApi.mockReturnValue('mocked data');
    expect(getDataFromApi()).toBe('mocked data');
});
