import PersonProvider from '../providers/person/PersonProviderType';
import { Person } from '../types/person';
import PersonService from './PersonServiceType';

const personService: PersonService = {
  createPerson: async (personProvider: PersonProvider, person: Person):
  Promise<boolean> => personProvider.createPerson(person),

  getPerson: async (personProvider: PersonProvider, id: string):
  Promise<Person | undefined> => personProvider.getPerson(id),

  getAllPeople: async (personProvider: PersonProvider):
  Promise<Person[]> => personProvider.getAllPeople(),

  updatePerson: async (personProvider: PersonProvider, id: string, person: Person):
  Promise<boolean> => personProvider.updatePerson(id, person),

  deletePerson: async (personProvider: PersonProvider, id: string):
  Promise<boolean> => personProvider.deletePerson(id),
};

export default personService;
