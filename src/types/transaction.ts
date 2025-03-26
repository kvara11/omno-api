export type TransactionRequest = {
    amount: number;
    currency: string;
    lang?: string;
    hookUrl?: string;
    callback?: string;
    callbackFail?: string;
    billing?: any;
    orderId: string;
    cardToken: string;
    kycVerified?: boolean;
    previousPaymentCount?: number;
    cardData?: any;
    saveCard?: boolean;
};
  