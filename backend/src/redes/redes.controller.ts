import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RedesService } from './redes.service';
import { CreateRedeDto } from './dto/create-rede.dto';
import { UpdateRedeDto } from './dto/update-rede.dto';

@Controller('redes')
export class RedesController {
  constructor(private readonly redesService: RedesService) {}

  @Post()
  create(@Body() createRedeDto: CreateRedeDto) {
    return this.redesService.create(createRedeDto);
  }

  @Get()
  findAll() {
    return this.redesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.redesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRedeDto: UpdateRedeDto) {
    return this.redesService.update(+id, updateRedeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.redesService.remove(+id);
  }
}
