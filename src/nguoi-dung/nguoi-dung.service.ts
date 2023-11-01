import { Injectable } from '@nestjs/common';
import { NguoiDung, PrismaClient } from '@prisma/client';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';

@Injectable()
export class NguoiDungService {
    constructor() { }
    model = new PrismaClient;

    async findAll(): Promise<NguoiDung[]> {
        return this.model.nguoiDung.findMany();
    }

    async create(data: NguoiDung) {
        const createdNguoiDung = await this.model.nguoiDung.create({ data });
        return createdNguoiDung;
    }

    async findById(id: number) {
        return this.model.nguoiDung.findUnique({
            where: {
                id,
            },
        });
    }

    async updateById(
        id: number,
        updateDto: UpdateNguoiDungDto,
    ) {
        return this.model.nguoiDung.update({
            where: {
                id,
            },
            data: updateDto,
        });
    }

    async remove(id: number) {
        await this.model.nguoiDung.delete({
            where: {
                id,
            },
        });
        return 'Successfully deleted.';
    }

}
