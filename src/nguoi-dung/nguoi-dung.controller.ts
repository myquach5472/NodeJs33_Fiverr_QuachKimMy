import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { ConfigService } from '@nestjs/config/dist';
import { NguoiDung } from '@prisma/client';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("NguoiDung")
@Controller('nguoi-dung')
export class NguoiDungController {
  constructor(private readonly nguoiDungService: NguoiDungService,
    private configService: ConfigService  ) {}

    @Get()
    findAll(): Promise<NguoiDung[]> {
      return this.nguoiDungService.findAll();
    }

    @Post()
    create(@Body() createNguoiDungDto: CreateNguoiDungDto) {
      return this.nguoiDungService.create(createNguoiDungDto);
    }

    @Get('/:id')
    findById(@Param('id') id: number) {
        return this.nguoiDungService.findById(+id);
      }
      
    @Patch('/:id')
    updateById(
      @Param('id') id: number,
      @Body() updateNguoiDungDto: UpdateNguoiDungDto,
    ){
      return this.nguoiDungService.updateById(+id, updateNguoiDungDto);
    }
  
    @Delete('/:id')
    remove(@Param('id') id: number) {
      return this.nguoiDungService.remove(+id);
    }

}
