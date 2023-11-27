import { Controller, Get, Query } from '@nestjs/common'
import { CredentialsService } from './credentials.service'
import { CredentialsDto } from './credentials.dto'

@Controller('credentials')
export class CredentialsController {
  constructor(private readonly service: CredentialsService) {}

  @Get('leaked')
  async isLeaked(@Query() credentials: CredentialsDto): Promise<string> {
    const data = credentials.hash || credentials
    const isExist = await this.service.isLeaked(data)
    return isExist ? 'True' : 'False'
  }
}
