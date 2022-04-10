/* eslint-disable @typescript-eslint/no-unused-vars */
import { jest } from '@jest/globals';
import request from 'supertest';
import PersonProvider from '../providers/person/PersonProviderType';
import PersonService from '../services/PersonServiceType';
import App from '../src/app';
import { Person } from '../types/person';

const testPerson: Person = {
  personId: '1',
  firstName: 'Bob',
  lastName: 'Lumbridge',
  dateOfBirth: '2022-10-27',
  emailAddress: 'bob_lumbridge@hotmail.co.uk',
};

const testBodyUpdatePerson: Person = {
  personId: '1',
  firstName: 'Alice',
  lastName: 'Varrock',
  dateOfBirth: '2022-11-27',
  emailAddress: 'alice_varrock@hotmail.co.uk',
};

const personProvider: PersonProvider = {
  createPerson: jest.fn((p) => Promise.resolve(true)),
  getPerson: jest.fn((id) => Promise.resolve(testPerson)),
  getAllPeople: jest.fn(() => Promise.resolve([testPerson, testPerson])),
  updatePerson: jest.fn((id, p) => Promise.resolve(true)),
  deletePerson: jest.fn((id) => Promise.resolve(true)),
};

const personService: PersonService = {
  createPerson: jest.fn((pp, p) => Promise.resolve(true)),
  getPerson: jest.fn((pp, id) => Promise.resolve(testPerson)),
  getAllPeople: jest.fn(() => Promise.resolve([testPerson, testPerson])),
  updatePerson: jest.fn((id, p) => Promise.resolve(true)),
  deletePerson: jest.fn((id) => Promise.resolve(true)),
};

describe('CRUD - /person', () => {
  const app = App.makeApp(personService, personProvider);
  test('Create', async () => {
    const result = await request(app).put('/person').send(testPerson);
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
  test('Read', async () => {
    const result = await request(app).get('/person/1').send();
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
  test('Read batch', async () => {
    const result = await request(app).get('/people').send();
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
  test('Update', async () => {
    const result = await request(app).patch('/person/1').send(testBodyUpdatePerson);
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
  test('Delete', async () => {
    const result = await request(app).delete('/person/1').send(testPerson);
    expect(result).toBeTruthy();
    expect(result.statusCode).toEqual(200);
  });
});
