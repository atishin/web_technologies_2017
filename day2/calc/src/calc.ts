import { SumOperation } from './operations/sum.operation';
import { IOperation } from "./operation";
import { SubOperation } from "./operations/sub.operation";

export class Calculator {

    private operations: IOperation[];

    constructor() {
        this.operations = [
            new SumOperation(),
            new SubOperation()
        ]
    }

    private findOperation(operation: string): IOperation {
        return this.operations.find(o => o.operation == operation);
    }

    public sum(...params: number[]) {
        const operation = this.findOperation('+');
        operation.params = params;
        return operation.execute();
    }

    public execute(_operation: string, params: number[]) {
        const operation = this.findOperation(_operation);
        operation.params = params;
        return operation.execute();
    }
}