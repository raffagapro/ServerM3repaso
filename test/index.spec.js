const session = require('supertest-session');
const app = require('../server');
const Pendiente = require('../Modelos/Pendiente');
const { IdCreator } = require('../utils.js')

const agent = session(app);

const pendienteMock = new Pendiente(IdCreator(), 'Hacer la tarea');

describe('Test API Lista Pendiente', ()=>{
    describe('/pendiente', ()=>{
        describe('GET', ()=>{
            it('responds with 200', () => agent.get('/pendiente/0').expect(200));
            it('responds with 400 if ID is not found', () => agent.get('/pendiente/3').expect(400));
            it('return an object with a Pendiente',
            // ()=>agent.get('/pendiente/0').then((res)=>{
            //     expect(typeof res.body.result).toEqual('object');
            // })
                async ()=>{
                    const result = await agent.get('/pendiente/0');
                    expect(typeof result.body.result).toEqual('object');
                }
            );
        })
    })

    describe('/pendientes', ()=>{
        
    })
});