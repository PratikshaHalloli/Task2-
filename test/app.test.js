const { test } = require('node:test');
const assert = require('node:assert');
const server = require('../app');

test('Health endpoint should return UP', async () => {
    await new Promise(resolve => server.listen(0, resolve));

    try {
        const port = server.address().port;
        const response = await fetch(`http://localhost:${port}/health`);
        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.deepStrictEqual(data, { status: 'UP' });
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
});
