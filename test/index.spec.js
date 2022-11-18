const session = require('supertest-session');
const app = require('../server');
const Pendiente = require('../Modelos/Pendiente');
const { IdCreator } = require('../utils.js');
const { json } = require('express');

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

        describe('POST', ()=>{
            it('responds with 200', async () => {
                const anotherPendienteMock = new Pendiente(IdCreator(), 'Tomar Agua');
                const result = await agent.post('/pendiente').send(anotherPendienteMock);
                expect(200);
            });
            it('responds with 400 if no title is send', () => agent.post('/pendiente').expect(400));
            it('responds with error and error message if no title is sent', async () => {
                const result = await agent.post('/pendiente');
                expect(JSON.parse(result.error.text).error).toEqual('No se encontro un titulo');
            });
            it('responds with an object when the same title', async () => {
                const anotherPendienteMock = new Pendiente(IdCreator(), 'Recordad Parsear de JSON');
                const result = await agent.post('/pendiente').send(anotherPendienteMock);
                expect(result.body.result.title).toEqual('Recordad Parsear de JSON');
            });
        });

        describe('PUT', ()=>{
            it('responds with 200', () => agent.put('/pendiente/0').expect(200));
            it('responds with 400 if no pendiente was found', () => agent.put('/pendiente/523').expect(400));
            it('responds with error message if an invalid number is passed', async () => {
                const result = await agent.put('/pendiente/batman');
                expect(JSON.parse(result.error.text).error).toEqual('No se mando un id valido');
            });
            it('responds with an object when the same title', async () => {
                const anotherPendienteMock = new Pendiente(IdCreator(), 'He cambiado mi titulo');
                const result = await agent.put('/pendiente/0').send(anotherPendienteMock);
                expect(result.body.result.title).toEqual('He cambiado mi titulo');
            });
        });
    })

    describe('/pendientes', ()=>{
        
    })
});