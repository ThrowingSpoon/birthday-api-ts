import PersonProvider from '../../providers/person/PersonProviderType';
import { Person } from '../../types/person';

type PersonService = {
  createPerson: (personProvider: PersonProvider, person: Person) => Promise<boolean>;
  getPerson: (personProvider: PersonProvider, id: string) => Promise<Person | undefined>;
  getAllPeople: (personProvider: PersonProvider) => Promise<Person[]>;
  updatePerson: (personProvider: PersonProvider, id: string, person: Person) => Promise<boolean>;
  deletePerson: (personProvider: PersonProvider, id: string) => Promise<boolean>
}

export default PersonService;
