import { ApiProperty } from '@nestjs/swagger';
export class CreateTeamDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  salary: number;

  @ApiProperty()
  position: string;

  @ApiProperty()
  country: string;
}

