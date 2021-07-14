
const request = require('supertest')
const app = require('../app.js')

describe('inicio dos testes', () => {
    
    //descrição do caso de testes
    test('Acessando rota /all_weather', async () => {
        const response = await request(app).get('/all_weather');
        expect(response.status).toEqual(200);
    })

    test('Acessando rota /weather/Santa Maria', async () => {
        const response = await request(app).get('/weather/Santa Maria');
        expect(response.status).toEqual(200);
    })

})
