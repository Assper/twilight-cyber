import { Injectable } from '@nestjs/common'
import { DbService } from 'src/db/db.service'

export type CredentialsFilter = {
  username?: string
  password?: string
  username_password_hash?: string
}

@Injectable()
export class CredentialsRepository {
  readonly tableName = 'credentials'

  constructor(private readonly db: DbService) {}

  async isExist(filter: CredentialsFilter): Promise<boolean> {
    const condition = this.db.getConditionString(filter)
    const values = Object.values(filter)
    const result = await this.db.client.query(
      `select 1 from ${this.tableName} where ${condition}`,
      values
    )
    return !!result.rows.length
  }
}
