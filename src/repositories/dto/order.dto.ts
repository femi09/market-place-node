export class CreateOrderDTO {
  user: string;
  orderItems: {
    quantity: number;
    amount: number;
    status: string;
    products: string;
  }[];
  deliveryAddress: string;
  itemsPrice: number;
  taxPrice: number;
  deliveryFee: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt: Date;
  deliveredAt: Date;
  paymentMethod: string;
  deliveryMethod: string;
  paymentResult: {
    id: string;
    status: string;
  };
}
