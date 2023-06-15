import { Exclude } from 'class-transformer';

export class ResponseOutPut<T> {
    @Exclude() private readonly success: boolean;
    @Exclude() private readonly code: number;
    @Exclude() private readonly data: T;

    private constructor(success: boolean, code: number, data: T) {
        this.success = success;
        this.code = code;
        this.data = data;
    }

    static OK<T>(data: T): ResponseOutPut<T> {
        return new ResponseOutPut<T>(true, 200, data);
    }
}
