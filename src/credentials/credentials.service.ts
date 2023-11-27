import { Injectable } from '@nestjs/common'
import {
  CredentialsFilter,
  CredentialsRepository
} from './credentials.repository'

export type Credentials = {
  username: string
  password: string
}

@Injectable()
export class CredentialsService {
  constructor(private readonly repo: CredentialsRepository) {}

  private getIsLeakedFilter(data: string | Credentials): CredentialsFilter {
    if (typeof data === 'string') {
      return { username_password_hash: data }
    }

    return {
      username: data.username,
      password: data.password
    }
  }

  isLeaked(data: string | Credentials): Promise<boolean> {
    const filter = this.getIsLeakedFilter(data)
    return this.repo.isExist(filter)
  }
}
