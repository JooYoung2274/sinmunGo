import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class articleDeleteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '1234', description: '게시글 비밀번호', required: true })
    password: string;
}
