import { Category } from "./category";

export class Otcproduct {
    constructor(
        public productId: number,
        public productName: string,
        public category: Category,
        public manufacturer: string,
        public price: number
    ){}
}
