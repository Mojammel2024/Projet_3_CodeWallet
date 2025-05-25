// test-db.js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { JsonDB, Config } = require('node-json-db');

const db = new JsonDB(new Config('myDatabase', true, true, '/'));

async function test() {
    await db.push('/fragments/1', {
        id: 1,
        title: 'Test Fragment',
        code: 'const [state, setState] = useState(0);',
        tags: ['React', 'State'],
    });
    const data = await db.getData('/fragments');
    console.log(data);
}

test();