import { Injectable } from '@nestjs/common';
import {  UpdateCongViecDto } from './dto/update-cong-viec.dto';
import { PrismaClient } from '@prisma/client';
import { CongViec } from './entities/cong-viec.entity';

@Injectable()
export class CongViecService {
  constructor() { }
  model = new PrismaClient;

  async findAll(): Promise<CongViec[]> {
    return this.model.congViec.findMany();
  }

  async create(data:CongViec) {
    const createdCongViec = await this.model.congViec.create({ data });
    return createdCongViec;

}

async findById(id: number) {
  return this.model.congViec.findUnique({
    where: {
      id,
    },
  });
  }
  
  async updateById(
    id: number,
    updateDto: UpdateCongViecDto,
  ) {
    return this.model.congViec.update({
      where: {
        id,
      },
      data: updateDto,
    });
    return 'Successfully updated.';
  }
  
  async remove(id: number) {
    await this.model.congViec.delete({
      where: {
        id,
      },
    });
    return 'Successfully deleted.';
  }

  async layMenuLoaiCongViec() {
    const menuLoaiCongViec = await this.model.congViec.findMany({
      include: {
        ChiTietLoaiCongViec: true,
      },
    });

    return menuLoaiCongViec;
  }

}
