import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675358107807 implements MigrationInterface {
    name = 'createTables1675358107807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
