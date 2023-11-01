import { ApiProperty } from "@nestjs/swagger"

export class UpdateBinhLuanDto {
  @ApiProperty()
  noi_dung: string;
  @ApiProperty()
  sao_binh_luan: number;
}
export class BinhLuanDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  ngay_binh_luan: Date;
  @ApiProperty()
  noi_dung: string;
  @ApiProperty()
  sao_binh_luan: number;
}