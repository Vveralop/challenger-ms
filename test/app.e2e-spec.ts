import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('ContractsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/contract (POST) - successful creation', async () => {
    const insertRecord = {
      clientname: 'Carlos Diaz',
      email: 'cdiaz@gmail.com',
      initialdate: new Date(),
      accountnumber: '01-00212-012',
      amount: '100000',
      currency: 1,
    };

    const response = await request(app.getHttpServer())
      .post('/contract')
      .send(insertRecord)
      .expect(201);
    const contract = response.body;
    expect(contract.id).toBeDefined();
    expect(typeof contract.clientName).toBe('string');
    expect(contract.clientName).toEqual('Carlos Diaz');
    expect(contract.accountNumber).toEqual('01-00212-012');
    expect(contract.amount).toEqual('100000');
  });

  it('/contract (GET) - with query parameters', () => {
    return request(app.getHttpServer())
      .get('/contract')
      .query({
        accountNumber: '00-0233-443',
        startDate: '2024-01-01',
        endDate: '2024-08-22',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body[0].accountnumber).toEqual('00-0233-443');
      });
  });
});
