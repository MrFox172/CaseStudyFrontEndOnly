export interface CheckOut{
    productIds:number[],
    userId:number,
    creditCardNumber:number,
    creditCardCode:number,
    street:string,
    city:string,
    state:string,
    zipCode:number,
    country:string
}