import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class commentCreateDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '댓글 내용입니다', description: '댓글 내용', required: true })
    content: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: '게시글 번호', required: true })
    articleId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '1234', description: '댓글 비밀번호', required: true })
    password: string;
}
