import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ChiTietLoaiCongViecService } from './chi-tiet-loai-cong-viec.service';
import { CreateChiTietLoaiCongViecDto, FileUploadDto } from './dto/create-chi-tiet-loai-cong-viec.dto';
import { ChiTietLoaiCongViecDto, UpdateChiTietLoaiCongViecDto } from './dto/update-chi-tiet-loai-cong-viec.dto';
import { ConfigService } from '@nestjs/config/dist';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiTags } from '@nestjs/swagger';
import { ApiBody, ApiConsumes } from '@nestjs/swagger/dist';

@ApiTags("ChiTietLoaiCongViec")
@Controller('chi-tiet-loai-cong-viec')
export class ChiTietLoaiCongViecController {
  constructor(private readonly chiTietLoaiCongViecService: ChiTietLoaiCongViecService,
    private configService: ConfigService) {}

    @ApiConsumes('multipart/form-data')
    @ApiBody({type: FileUploadDto})
    @Post('/upload-hinh-anh')
    @UseInterceptors(
      FileInterceptor("file",
      {
  storage: diskStorage({
    destination: process.cwd() + "/public/img",
    filename: (req, file, callback) => callback(null, new Date().getTime()+ "_" + file.originalname)
  })
    }))
    uploadPic(@UploadedFile() file: Express.Multer.File){
      return file;
    }

    @Get()
    findAll() {
      return this.chiTietLoaiCongViecService.findAll();
    }

    @Post()
  create(@Body() createChiTietLoaiCongViecDto: CreateChiTietLoaiCongViecDto): Promise<ChiTietLoaiCongViecDto> {
    return this.chiTietLoaiCongViecService.create(createChiTietLoaiCongViecDto);
  }

  @Get('/:id')
  findOneById(@Param('id') id: number) {
    return this.chiTietLoaiCongViecService.findOneById(+id);
  }

  @Patch('/:id')
  updateById(
    @Param('id') id: number,
    @Body() updateDto: UpdateChiTietLoaiCongViecDto,
  ){
    return this.chiTietLoaiCongViecService.updateById(+id, updateDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.chiTietLoaiCongViecService.remove(+id);
  }
}
