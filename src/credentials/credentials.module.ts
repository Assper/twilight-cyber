import { Module } from '@nestjs/common'
import { CredentialsService } from './credentials.service'
import { CredentialsController } from './credentials.controller'
import { DbModule } from 'src/db/db.module'
import { CredentialsRepository } from './credentials.repository'

@Module({
  imports: [DbModule],
  controllers: [CredentialsController],
  providers: [CredentialsService, CredentialsRepository]
})
export class CredentialsModule {}
