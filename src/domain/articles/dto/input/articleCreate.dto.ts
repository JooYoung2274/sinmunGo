import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class articleCreateDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '게시글 제목입니다', description: '게시들 제목', required: true })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '게시글 내용입니다', description: '게시글 내용', required: true })
    content: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ example: 1, description: '게시판 카테고리 번호', required: true })
    boardId: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '1234', description: '게시글 비밀번호', required: true })
    password: string;
}
