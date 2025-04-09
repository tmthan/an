export type Food = {
    id: string;
    name: string;
    price: number | null;
}

export type Member = {
    id: string;
    name: string;
}

export type BillItem = {
    id: string;
    food: string;
    member: string;
    quantity: number;
}

export enum CalculateMode {
    ShareByMember = "ShareByMember",
    ShareByFood = "ShareByFood",
}

export type ShareBillLog = {
    foodList: Food[];
    memberList: Member[];
    billItems: BillItem[];
    shippingFee: number;
    discountAmount: number;
    calculatorMode: CalculateMode;
    created_at: Date;
    id: string;
    name: string;
}

export type ResultItemTable = {
    member: string;
    totalFood: number;
    shippingFee: number;
    discountAmount: number;
    money: number;
  };