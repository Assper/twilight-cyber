import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class DbConfig {
  readonly host: string
  readonly port: number
  readonly database: string
  readonly user: string
  readonly password: string
  readonly ssl = {
    rejectUnauthorized: false
  } as const

  constructor(config: ConfigService) {
    this.host = config.get('db.host')
    this.port = config.get<number>('db.port')
    this.database = config.get('db.name')
    this.user = config.get('db.username')
    this.password = config.get('db.password')
  }
}
