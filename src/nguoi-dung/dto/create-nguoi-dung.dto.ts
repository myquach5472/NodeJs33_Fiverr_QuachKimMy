import { ApiProperty } from "@nestjs/swagger"
export class CreateNguoiDungDto {
    @ApiProperty()
    id:number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    pass_word: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    birth_day: string;
    @ApiProperty()
    gender: boolean;
    @ApiProperty()
    role: string;
    @ApiProperty()
    skill: string;
    @ApiProperty()
    certification: string;

}
