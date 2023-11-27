import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppConfig {
  readonly prefix = 'api'
  readonly port: number

  constructor(config: ConfigService) {
    this.port = config.get<number>('port')
  }
}
