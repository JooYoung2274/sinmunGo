export declare class ResponseOutPut<T> {
    private readonly success;
    private readonly code;
    private readonly data;
    private constructor();
    static OK<T>(data: T): ResponseOutPut<T>;
}
