export interface IOperation {
    params: number[];
    operation: string;
    execute(): number;
}