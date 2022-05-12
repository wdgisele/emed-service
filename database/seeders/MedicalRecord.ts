import { faker } from '@faker-js/faker'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MedicalRecord from 'App/Models/MedicalRecord'

export default class MedicalRecordSeeder extends BaseSeeder {
  public async run() {
    await MedicalRecord.createMany([
      {
        attendanceId: 1,
        description: faker.lorem.text(),
      },
      {
        attendanceId: 1,
        description: faker.lorem.text(),
      },
    ])
  }
}
