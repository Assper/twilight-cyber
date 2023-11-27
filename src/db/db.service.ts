import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { Client } from 'pg'
import { DbConfig } from 'src/config/db.config'

@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
  readonly client: Client

  constructor(config: DbConfig) {
    this.client = new Client(config)
  }

  getConditionString(filter: Record<string, unknown>): string {
    return Object.keys(filter)
      .map((key, i) => `${key}=$${i + 1}`)
      .join(' and ')
  }

  async onModuleInit() {
    await this.client.connect()
  }

  async onModuleDestroy() {
    await this.client.end()
  }
}
