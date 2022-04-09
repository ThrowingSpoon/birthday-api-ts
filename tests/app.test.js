"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const app = app_1.default.makeApp();
const testBodyCreatePerson = {
    first_name: 'Bob',
    last_name: 'Lumbridge',
    date_of_birth: '2022-10-27',
    email_address: 'bob_lumbridge@hotmail.co.uk',
};
const testBodyUpdatePerson = {
    first_name: 'Alice',
    last_name: 'Varrock',
    date_of_birth: '2022-11-27',
    email_address: 'alice_lumbridge@hotmail.co.uk',
};
describe('CRUD operations', () => {
    test('Cread', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app).put('/person').send(testBodyCreatePerson);
        expect(result).toBeTruthy();
        expect(result.statusCode).toEqual(200);
    }));
    test('Read', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app).get('/person').send();
        expect(result).toBeTruthy();
        expect(result.statusCode).toEqual(200);
    }));
    test('Update', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app).patch('/person').send(testBodyUpdatePerson);
        expect(result).toBeTruthy();
        expect(result.statusCode).toEqual(200);
    }));
    test('Delete', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app).delete('/person').send(testBodyCreatePerson);
        expect(result).toBeTruthy();
        expect(result.statusCode).toEqual(200);
    }));
});
