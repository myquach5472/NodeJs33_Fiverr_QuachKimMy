import { Injectable } from '@nestjs/common';
import { UpdateThueCongViecDto } from './dto/update-thue-cong-viec.dto';
import { PrismaClient, ThueCongViec } from '@prisma/client';

@Injectable()
export class ThueCongViecService {
  constructor() { }
  model = new PrismaClient;

  
  async findAll(): Promise<ThueCongViec[]> {
    return this.model.thueCongViec.findMany();
  }

  async create(data: ThueCongViec) {
    const createdThueCongViec = await this.model.thueCongViec.create({ data });
    return createdThueCongViec;
}

async findById(id: number) {
return this.model.thueCongViec.findUnique({
  where: {
    id,
  },
});
}

async updateById(
  id: number,
  updateDto: UpdateThueCongViecDto,
) {
  return this.model.thueCongViec.update({
    where: {
      id,
    },
    data: updateDto,
  });
  return 'Successfully updated.';
}

async remove(id: number) {
  await this.model.thueCongViec.delete({
    where: {
      id,
    },
  });
  return 'Successfully deleted.';
}

}
