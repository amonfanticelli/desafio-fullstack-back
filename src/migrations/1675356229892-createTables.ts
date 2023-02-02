import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675356229892 implements MigrationInterface {
    name = 'createTables1675356229892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
