import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import { config } from './config'
import { AppConfig } from './app.config'
import { DbConfig } from './db.config'

@Module({
  imports: [NestConfigModule.forRoot({ load: [config] })],
  providers: [AppConfig, DbConfig],
  exports: [AppConfig, DbConfig]
})
export class ConfigModule {}
