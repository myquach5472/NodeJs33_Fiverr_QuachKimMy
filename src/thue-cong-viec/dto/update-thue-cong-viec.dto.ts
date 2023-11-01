import { ApiProperty } from "@nestjs/swagger"

export class UpdateThueCongViecDto {
    @ApiProperty()
    ngay_thue: Date;
    @ApiProperty()
    hoan_thanh: boolean;
    @ApiProperty()
    ma_cong_viec:number;
    @ApiProperty()
    ma_nguoi_thue: number;
}
