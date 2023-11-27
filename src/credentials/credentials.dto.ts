import { IsOptional, IsString } from 'class-validator'

export class CredentialsDto {
  @IsString()
  @IsOptional()
  username = ''

  @IsString()
  @IsOptional()
  password = ''

  @IsString()
  @IsOptional()
  hash = ''
}
