import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DbModule } from './db/db.module'
import { CredentialsModule } from './credentials/credentials.module'

@Module({
  imports: [ConfigModule, DbModule, CredentialsModule]
})
export class AppModule {}
