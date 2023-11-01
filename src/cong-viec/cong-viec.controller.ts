import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CongViecService } from './cong-viec.service';
import { CreateCongViecDto, FileUploadDto } from './dto/create-cong-viec.dto';
import { CongViecDto, UpdateCongViecDto } from './dto/update-cong-viec.dto';
import { ConfigService } from '@nestjs/config/dist';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CongViec } from './entities/cong-viec.entity';
import { ApiTags } from '@nestjs/swagger';
import { ApiBody, ApiConsumes } from '@nestjs/swagger/dist';

@ApiTags("CongViec")
@Controller('cong-viec')
export class CongViecController {
  constructor(private readonly congViecService: CongViecService,
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
  async findAll(): Promise<CongViec[]> {
    return this.congViecService.findAll();
  }

  @Post()
  create(@Body() createCongViecDto: CreateCongViecDto): Promise<CongViecDto> {
    return this.congViecService.create(createCongViecDto);
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
      return this.congViecService.findById(+id);
    }

    @Patch('/:id')
    updateById(
      @Param('id') id: number,
      @Body() updateCongViecDto: UpdateCongViecDto,
    ){
      return this.congViecService.updateById(+id, updateCongViecDto);
    }
  
    @Delete('/:id')
    remove(@Param('id') id: number) {
      return this.congViecService.remove(+id);
    }

    @Get('/lay-menu-loai-cong-viec')
async layMenuLoaiCongViec() {
  const menuLoaiCongViec = await this.congViecService.layMenuLoaiCongViec();
  return menuLoaiCongViec;
}


}
