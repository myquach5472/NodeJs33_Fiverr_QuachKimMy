import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThueCongViecService } from './thue-cong-viec.service';
import { CreateThueCongViecDto } from './dto/create-thue-cong-viec.dto';
import { UpdateThueCongViecDto } from './dto/update-thue-cong-viec.dto';
import { ConfigService } from '@nestjs/config/dist'
import { ThueCongViec } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("ThueCongViec")
@Controller('thue-cong-viec')
export class ThueCongViecController {
  constructor(private readonly thueCongViecService: ThueCongViecService,
    private configService: ConfigService) {}


    @Get()
    findAll(): Promise<ThueCongViec[]> {
      return this.thueCongViecService.findAll();
    }

    @Post()
    create(@Body() createThueCongViecDto: CreateThueCongViecDto) {
      return this.thueCongViecService.create(createThueCongViecDto);
    }

    @Get('/:id')
  findById(@Param('id') id: number) {
      return this.thueCongViecService.findById(+id);
    }

    @Patch('/:id')
    updateById(
      @Param('id') id: number,
      @Body() updateThueCongViecDto: UpdateThueCongViecDto,
    ){
      return this.thueCongViecService.updateById(+id, updateThueCongViecDto);
    }
  
    @Delete('/:id')
    remove(@Param('id') id: number) {
      return this.thueCongViecService.remove(+id);
    }

}
