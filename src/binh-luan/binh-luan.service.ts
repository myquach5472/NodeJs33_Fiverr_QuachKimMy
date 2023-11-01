import { Injectable } from '@nestjs/common';
import { CreateBinhLuanDto } from './dto/create-binh-luan.dto';
import { BinhLuanDto, UpdateBinhLuanDto } from './dto/update-binh-luan.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BinhLuanService {
  constructor() { }
  model = new PrismaClient;

  async findAll(): Promise<BinhLuanDto[]> {
    const binhLuanData = await this.model.binhLuan.findMany({
    });
    return binhLuanData.map((record) => ({
      id: record.id,
      ngay_binh_luan: record.ngay_binh_luan,
      noi_dung: record.noi_dung,
      sao_binh_luan: record.sao_binh_luan,
    }));
  }

  async create(data: CreateBinhLuanDto): Promise<BinhLuanDto> {
    const newBinhLuan = await this.model.binhLuan.create({
      data,
    });
    return {
      id: newBinhLuan.id,
      ngay_binh_luan: newBinhLuan.ngay_binh_luan,
      noi_dung: newBinhLuan.noi_dung,
      sao_binh_luan: newBinhLuan.sao_binh_luan,
    };
  }

  async update(id: number, data: UpdateBinhLuanDto): Promise<BinhLuanDto> {
    const updatedBinhLuan = await this.model.binhLuan.update({
      where: { id },
      data,
    });

    return {
      id: updatedBinhLuan.id,
      ngay_binh_luan: updatedBinhLuan.ngay_binh_luan,
      noi_dung: updatedBinhLuan.noi_dung,
      sao_binh_luan: updatedBinhLuan.sao_binh_luan,
    };
  }

  async remove(id: number) {
    await this.model.binhLuan.delete({
      where: { id },
    });
    return 'Successfully deleted.';
  }

  async findAllByMaCongViec(maCongViec: number): Promise<BinhLuanDto[]> {
    const binhLuans = await this.model.binhLuan.findMany({
      where: {
        ma_cong_viec: maCongViec,
      },
    });

    return binhLuans.map((binhLuan) => ({
      id: binhLuan.id,
      ngay_binh_luan: binhLuan.ngay_binh_luan,
      noi_dung: binhLuan.noi_dung,
      sao_binh_luan: binhLuan.sao_binh_luan,
    }));
  }

}
