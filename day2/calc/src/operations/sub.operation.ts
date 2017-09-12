import { IOperation } from "../operation";

export class SubOperation implements IOperation {
    
    public operation: string = '-';
    public params: number[] = [];

    execute(): number {
        
        if (this.params.length <= 1) {
            throw new Error("Empty parameters");
        }

        let sum = this.params[0];
        for (let i = 1; i < this.params.length; i ++) {
            const param = this.params[i];
            sum -= param;
        }
        this.params = [];
        return sum;
    }

}