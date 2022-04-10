import { Person } from '../../types/person';

type PersonProvider = {
    createPerson: (person: Person) => Promise<boolean>;
    getPerson: (id: string) => Promise<Person | undefined>;
    getAllPeople: () => Promise<Person[]>;
    updatePerson: (id: string, person: Person) => Promise<boolean>;
    deletePerson: (id: string) => Promise<boolean>;
}

export default PersonProvider;
