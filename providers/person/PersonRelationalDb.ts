import { Client } from 'pg';
import { v4 as uuid } from 'uuid';
import { Person } from '../../types/person';
import PersonProvider from './PersonProviderType';

/**
 * Todo:
 * - Add validation
 * - Handle error cases better
 */

const personRelationalDb: PersonProvider = {
  createPerson: async (person: Person): Promise<boolean> => {
    const query = `INSERT INTO people
    (person_id, first_name, last_name, date_of_birth, email)
    VALUES($1, $2, $3, $4, $5)`;
    const values: string[] = [
      uuid(),
      person.firstName,
      person.lastName,
      person.dateOfBirth,
      person.emailAddress,
    ];

    const client = new Client();
    await client.connect();
    const res = await client.query(query, values);
    await client.end();

    return (res.rowCount === 1);
  },

  getPerson: async (id: string): Promise<Person | undefined> => {
    const query = 'SELECT * FROM people WHERE person_id = $1';
    const values: string[] = [id];

    const client = new Client();
    await client.connect();
    const res = await client.query(query, values);
    await client.end();

    let resultPerson: Person | undefined;
    if (res.rowCount === 1) {
      resultPerson = { ...res.rows[0] };
    }
    return resultPerson;
  },

  getAllPeople: async (): Promise<Person[]> => {
    const query = 'SELECT * FROM people';

    const client = new Client();
    await client.connect();
    const res = await client.query(query);
    await client.end();

    const resultPeople: Person[] = [];
    res.rows.forEach((element) => {
      resultPeople?.push({
        personId: element.person_id,
        firstName: element.first_name,
        lastName: element.last_name,
        dateOfBirth: element.date_of_birth,
        emailAddress: element.email,
      });
    });
    return resultPeople;
  },

  updatePerson: async (id: string, person: Person): Promise<boolean> => {
    const query = `UPDATE people
    SET first_name=$1, last_name=$2, date_of_birth=$3, email=$4;
    WHERE person_id=$5`;
    const values: string[] = [
      person.firstName,
      person.lastName,
      person.dateOfBirth,
      person.emailAddress,
      id,
    ];

    const client = new Client();
    await client.connect();
    const res = await client.query(query, values);
    await client.end();

    return (res.rowCount === 1);
  },

  deletePerson: async (id: string): Promise<boolean> => {
    const query = `DELETE FROM people
    WHERE person_id=$1`;
    const values: string[] = [
      id,
    ];

    const client = new Client();
    await client.connect();
    const res = await client.query(query, values);
    await client.end();

    return (res.rowCount === 1);
  },
};

export default personRelationalDb;
