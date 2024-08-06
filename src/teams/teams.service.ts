import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Team } from '@prisma/client'; // Asegúrate de que el nombre del modelo coincide

@Injectable()
export class TeamsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    return this.prisma.team.create({ data: createTeamDto });
  }

  async findAll(): Promise<Team[]> {
    return this.prisma.team.findMany();
  }

  async findOne(id: string): Promise<Team | null> {
    return this.prisma.team.findUnique({ where: { id } });
  }

  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    return this.prisma.team.update({ where: { id }, data: updateTeamDto });
  }

  async remove(id: string): Promise<Team> {
    return this.prisma.team.delete({ where: { id } });
  }
}
