import { ApiProperty } from "@nestjs/swagger"

export class CreateLoaiCongViecDto {
    @ApiProperty()
    ten_loai_cong_viec: string;
}
