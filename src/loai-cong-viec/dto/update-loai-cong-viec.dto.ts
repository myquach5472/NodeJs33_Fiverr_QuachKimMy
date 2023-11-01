import { ApiProperty } from "@nestjs/swagger"

export class UpdateLoaiCongViecDto {
    @ApiProperty()
    ten_loai_cong_viec: string;
}
export class LoaiCongViecDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    ten_loai_cong_viec: string;
  }