import { ApiProperty } from "@nestjs/swagger"

export class UpdateChiTietLoaiCongViecDto {
  @ApiProperty()
    ten_chi_tiet: string;
    @ApiProperty()
    hinh_anh: string;
    @ApiProperty()
    ma_loai_cong_viec: number;
  }
export class ChiTietLoaiCongViecDto {
  @ApiProperty()
    id:number;
    @ApiProperty()
    ten_chi_tiet: string;
    @ApiProperty()
    hinh_anh: string;
    @ApiProperty()
    ma_loai_cong_viec: number;
    }
    