import { DisoderSelectInterface } from "src/utils/interfaces";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'authEntity' })
export default class AuthEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ name: 'username', type: 'varchar', length: 12, nullable: false, unique: true })
  username: string;

  @Column({ name: 'name', type: 'varchar', length: 5, nullable: false })
  name: string;

  @Column({ name: 'email', type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column({ name: 'password', type: 'text', nullable: false })
  password: string;

  @Column({ name: 'salt', type: 'varchar', length: 32, nullable: false })
  salt: string;

  @Column({ name: 'phone', type: 'varchar', length: 11, unique: true , nullable: false })
  phone: string;

  @Column({ name: 'isWorker', type: 'boolean', nullable: false, default: false })
  isWorker: boolean;

  @Column({ name: 'isWorkerFilePath', type: 'text', nullable: true })
  isWorkerFilePath: string;

  @Column({ name: 'isDisorder', type: 'boolean', nullable: false, default: false })
  isDisoder: boolean;

  @Column({ name: 'isDisorderFilePath', type: 'text', nullable: true })
  isDisorderFilePath: string;
  
  @Column({ name: 'disoderDetails', type: 'text', nullable: true })
  DisoderDetails: DisoderSelectInterface[] | string;

  @Column({ name: 'address', type: 'text', nullable: false })
  address: string;
}