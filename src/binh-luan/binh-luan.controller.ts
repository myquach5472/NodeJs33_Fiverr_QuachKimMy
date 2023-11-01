import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BinhLuanService } from './binh-luan.service';
import { CreateBinhLuanDto } from './dto/create-binh-luan.dto';
import { BinhLuanDto, UpdateBinhLuanDto } from './dto/update-binh-luan.dto';
import { ConfigService } from '@nestjs/config/dist';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("BinhLuan")
@Controller('binh-luan')
export class BinhLuanController {
  constructor(private readonly binhLuanService: BinhLuanService,
    private configService: ConfigService) {}

@Get()
  findAll(): Promise<BinhLuanDto[]> {
    return this.binhLuanService.findAll();
  }

@Post()
  create(@Body() createBinhLuanDto: CreateBinhLuanDto): Promise<BinhLuanDto> {
    return this.binhLuanService.create(createBinhLuanDto);
  }


@Patch("/:id")
  update(
    @Param('id') id: number,
    @Body() updateBinhLuanDto: UpdateBinhLuanDto,
  ): Promise<BinhLuanDto> {
    return this.binhLuanService.update(+id, updateBinhLuanDto);
  }

@Delete("/:id")
  remove(@Param('id') id: number) {
    return this.binhLuanService.remove(+id);
  }

@Get('/lay-binh-luan-theo-cong-viec/:ma_cong_viec')
  findAllByMaCongViec(@Param('ma_cong_viec') maCongViec: number): Promise<BinhLuanDto[]> {
    return this.binhLuanService.findAllByMaCongViec(+maCongViec);
  }

}
