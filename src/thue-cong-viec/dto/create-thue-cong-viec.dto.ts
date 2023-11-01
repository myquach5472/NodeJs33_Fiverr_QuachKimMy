import { ApiProperty } from "@nestjs/swagger"
export class CreateThueCongViecDto {
    @ApiProperty()
    id:number;
    @ApiProperty()
    ngay_thue: Date;
    @ApiProperty()
    hoan_thanh: boolean;
    @ApiProperty()
    ma_cong_viec:number;
    @ApiProperty()
    ma_nguoi_thue: number;
}
