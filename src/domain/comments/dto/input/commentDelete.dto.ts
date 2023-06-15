import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class commentDeleteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '1234', description: '댓글 비밀번호', required: true })
    password: string;
}
