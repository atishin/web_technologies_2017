import { IOperation } from "../operation";

export class SumOperation implements IOperation {
    
    public operation: string = '+';
    public params: number[] = [];

    execute(): number {
        
        if (this.params.length <= 1) {
            throw new Error("Empty parameters");
        }

        let sum = 0;
        for (const param of this.params) {
            sum += param;
        }
        this.params = [];
        return sum;
    }

}