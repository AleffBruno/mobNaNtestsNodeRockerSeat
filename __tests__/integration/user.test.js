import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
    it('should ne able to register', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Junk',
                email: 'junk@email.com',
                password_hash: '123456'
            });

        expect(response.body).toHaveProperty('id');
    });

    it(`shouldn't create user with duplicated email `, async () => {
        await request(app)
        .post('/users')
        .send({
            name: 'Junk',
            email: 'junk@email.com',
            password_hash: '123456'
        });

        const response = await request(app)
        .post('/users')
        .send({
            name: 'Junk',
            email: 'junk@email.com',
            password_hash: '123456'
        });

        expect(response.body).toBe(400);
    })
})