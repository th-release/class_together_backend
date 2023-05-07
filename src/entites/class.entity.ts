import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import AuthEntity from "./auth.entity";
import { AmenitiesInterface, DisoderSelectInterface } from "src/utils/interfaces";

@Entity({ name: 'classEntity' })
export default class ClassEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  // 클래스 제목
  @Column({ name: 'title', type: 'varchar', length: 32, nullable: false })
  title: string;

  // 클래스 설명/소개
  @Column({ name: 'introduction', type: 'text', nullable: true })
  introduction: string;

  // 수업 대표 유저네임
  @ManyToOne(type => AuthEntity, user => user.username)
  @JoinColumn({ name: 'hostUsername', referencedColumnName: 'username' })
  username: string;

  // 수업 장소
  @Column({ name: 'address', type: 'text', nullable: false })
  address: string;

  // 썸네일 위치
  @Column({ name: 'thumbnailFilePath', type: 'text', nullable: false })
  thumbnailFilePath: string

  // 카테고리
  @Column({ name: 'category', type: 'text', nullable: false })
  category: string;

  // 누굴 위한 클래스?
  @Column({ name: 'sakeDetails', type: 'text', nullable: false })
  sakeDetails: DisoderSelectInterface[] | string;

  // 편의 시설
  @Column({ name: 'amenities', type: 'text', nullable: false })
  amenities: AmenitiesInterface | string;

  // 써야하는데 어케 데이터 받을지 생각중
  // 시작 시간
  // @Column({ name: 'startTime', type: '' })
}