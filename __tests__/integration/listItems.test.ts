import request from 'supertest';
import { app } from '../../src/server';

interface ListItem {
    id: number;
    item: string;
}

describe('Items', () => {
    test('should get all items', async () => {
        const resp = await request(app).get('/items');

        expect(resp.status).toBe(200);
    });

    test('should insert a new item', async () => {
        const item: ListItem = {
            id: 0,
            item: 'Bolacha'
        };

        const resp = await request(app).post('/items').send(item);

        expect(resp.status).toBe(200);
    });

    test('should update a item', async () => {
        const item: ListItem = {
            id: 1,
            item: 'Bolacha'
        };

        const resp = await request(app).put('/items').send(item);

        expect(resp.status).toBe(200);
    });

    test('should delete a item', async () => {
        const item: ListItem = {
            id: 1,
            item: 'Bolacha'
        };

        const resp = await request(app).delete('/items').set('id', String(item.id));

        expect(resp.status).toBe(200);
    });
})