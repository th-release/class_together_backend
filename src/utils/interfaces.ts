export interface UserToken {
  uuid: string,
  username: string,
  name: string,
  isDisoder: boolean,
  isWorker: boolean,
}

type DisoderType = 'Body' | 'Mental'
type Institution = 'External' | 'Internal'

export interface DisoderSelectInterface {
  disoderType: DisoderType,
  disoderInstitution: Institution,
  disoder: string,
  grade: number
}

export interface AmenitiesInterface {
  wheelchair: boolean, // 휠체어 입장 여부
  elevator: boolean, // 엘리베이터 보유 여부
  guideDog: boolean, // 가이드독 입장 여부
  disabledToilet: boolean, // 장애인용 화장실 보유 여부
  disabledRamp: boolean, // 장애인용 경사로 보유 여부
  disabledParkingSpace: boolean, // 장애인용 주차공간 보유 여부
  voiceMachine: boolean, // 음성유도기 보유 여부
}