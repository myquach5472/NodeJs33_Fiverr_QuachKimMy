import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoaiCongViecService } from './loai-cong-viec.service';
import { CreateLoaiCongViecDto } from './dto/create-loai-cong-viec.dto';
import { LoaiCongViecDto, UpdateLoaiCongViecDto } from './dto/update-loai-cong-viec.dto';
import { ConfigService } from '@nestjs/config/dist';
import { LoaiCongViec } from './entities/loai-cong-viec.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("LoaiCongViec")
@Controller('loai-cong-viec')
export class LoaiCongViecController {
  constructor(private readonly loaiCongViecService: LoaiCongViecService,
    private configService: ConfigService) {}

    @Get()
    findAll(): Promise<LoaiCongViec[]> {
      return this.loaiCongViecService.findAll();
    }

    @Post()
    create(@Body() createLoaiCongViecDto: CreateLoaiCongViecDto) {
      return this.loaiCongViecService.create(createLoaiCongViecDto);
    }

    @Get('/:id')
  findById(@Param('id') id: number) {
      return this.loaiCongViecService.findById(+id);
    }

    @Patch('/:id')
    updateById(
      @Param('id') id: number,
      @Body() updateLoaiCongViecDto: UpdateLoaiCongViecDto,
    ){
      return this.loaiCongViecService.updateById(+id, updateLoaiCongViecDto);
    }
  
    @Delete('/:id')
    remove(@Param('id') id: number) {
      return this.loaiCongViecService.remove(+id);
    }


}
