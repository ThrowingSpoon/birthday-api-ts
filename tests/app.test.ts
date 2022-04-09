import request from 'supertest';
import App from '../src/app';
import { Person } from '../types/person';

const app = App.makeApp();

const testBodyCreatePerson: Person = {
  first_name: 'Bob',
  last_name: 'Lumbridge',
  date_of_birth: '2022-10-27',
  email_address: 'bob_lumbridge@hotmail.co.uk',
};

const testBodyUpdatePerson: Person = {
  first_name: 'Alice',
  last_name: 'Varrock',
  date_of_birth: '2022-11-27',
  email_address: 'alice_varrock@hotmail.co.uk',
};

describe('CRUD - /person', () => {
  test('Cread', async () => {
    const result = await request(app).put('/person').send(testBodyCreatePerson);
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
  test('Read', async () => {
    const result = await request(app).get('/person').send();
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
  test('Update', async () => {
    const result = await request(app).patch('/person').send(testBodyUpdatePerson);
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
  test('Delete', async () => {
    const result = await request(app).delete('/person').send(testBodyCreatePerson);
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
});
