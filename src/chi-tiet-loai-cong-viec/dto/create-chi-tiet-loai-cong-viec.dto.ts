import { ApiProperty } from "@nestjs/swagger"
export class CreateChiTietLoaiCongViecDto {
@ApiProperty()
ten_chi_tiet: string;
@ApiProperty()
hinh_anh: string;
@ApiProperty()
ma_loai_cong_viec: number;
}
export class FileUploadDto{
    @ApiProperty({type:'string', format:'binary'})
    file: any;
}