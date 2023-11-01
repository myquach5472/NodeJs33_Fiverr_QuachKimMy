import {  Injectable } from '@nestjs/common';
import { UpdateLoaiCongViecDto } from './dto/update-loai-cong-viec.dto';
import { PrismaClient } from '@prisma/client';
import { LoaiCongViec } from './entities/loai-cong-viec.entity';

@Injectable()
export class LoaiCongViecService {
  constructor() { }
  model = new PrismaClient;
 
  async findAll(): Promise<LoaiCongViec[]> {
    return this.model.loaiCongViec.findMany();
  }

  async create(data: LoaiCongViec) {
    const createdLoaiCongViec = await this.model.loaiCongViec.create({ data });
    return createdLoaiCongViec;
}

async findById(id: number) {
return this.model.loaiCongViec.findUnique({
  where: {
    id,
  },
});
}

async updateById(
  id: number,
  updateDto: UpdateLoaiCongViecDto,
) {
  return this.model.loaiCongViec.update({
    where: {
      id,
    },
    data: updateDto,
  });
  return 'Successfully updated.';
}

async remove(id: number) {
  await this.model.loaiCongViec.delete({
    where: {
      id,
    },
  });
  return 'Successfully deleted.';
}


}
