import { Injectable } from '@nestjs/common';
import { CreateChiTietLoaiCongViecDto } from './dto/create-chi-tiet-loai-cong-viec.dto';
import { ChiTietLoaiCongViecDto, UpdateChiTietLoaiCongViecDto } from './dto/update-chi-tiet-loai-cong-viec.dto';
import { PrismaClient } from '@prisma/client';
import { ChiTietLoaiCongViec } from './entities/chi-tiet-loai-cong-viec.entity';

@Injectable()
export class ChiTietLoaiCongViecService {

  constructor() { }
  model = new PrismaClient;

    async findAll(): Promise<ChiTietLoaiCongViec[]> {
      const chiTietCongViecData = await this.model.chiTietLoaiCongViec.findMany({
      });
      return chiTietCongViecData.map((record) => ({
        id: record.id,
        ten_chi_tiet: record.ten_chi_tiet,
        hinh_anh: record.hinh_anh,
        ma_loai_cong_viec: record.ma_loai_cong_viec,
      }));
    }

    async create(data: CreateChiTietLoaiCongViecDto): Promise<ChiTietLoaiCongViecDto> {
      const newChiTietLoaiCongViec = await this.model.chiTietLoaiCongViec.create({
        data,
      });
      return {
        id: newChiTietLoaiCongViec.id,
        ten_chi_tiet: newChiTietLoaiCongViec.ten_chi_tiet,
        hinh_anh: newChiTietLoaiCongViec.hinh_anh,
        ma_loai_cong_viec: newChiTietLoaiCongViec.ma_loai_cong_viec,
      };
    }

    async findOneById(id: number) {
      return this.model.chiTietLoaiCongViec.findUnique({
        where: {
          id,
        },
      });
    }

    async updateById(
      id: number,
      updateDto: UpdateChiTietLoaiCongViecDto,
    ) {
      return this.model.chiTietLoaiCongViec.update({
        where: {
          id,
        },
        data: updateDto,
      });
      return 'Successfully updated.';
    }

    async remove(id: number) {
      await this.model.chiTietLoaiCongViec.delete({
        where: {
          id,
        },
      });
      return 'Successfully deleted.';
    }

    
}
