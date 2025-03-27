export interface CreateTransactionRequest {
  amount: number;
  currency: string;
  lang: string;
  hookUrl: string;
  callback: string;
  callbackFail: string;
  billing: BillingInfo;
  orderId: string;
  cardToken: string;
  kycVerified: boolean;
  previousPaymentCount: number;
  cardData: CardData;
  saveCard: boolean;
  payment3dsType: string
  merchantInformation: MerchantInformation;
}


interface BillingInfo {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
}


interface CardData {
  cardNumber: string;
  cardHolderName: string;
  cardExpiryDate: string;
  cardExpiryDate2: string;
  cardCvv: string;
  browser: BrowserInfo;
}


interface BrowserInfo {
  colorDepth: number;
  userAgent: string;
  language: string;
  timeZone: string;
  screenWidth: number;
  javaEnabled: boolean;
  customerIp: string;
  screenHeight: number;
  windowHeight: number;
  timeZoneOffset: number;
  windowWidth: number;
}


interface MerchantInformation {
  name: string;
  merchantName: string;
  country: string;
  address1: string;
  administrativeArea: string;
  locality: string;
  postalCode: string;
  url: string;
  customerServicePhoneNumber: string;
  categoryCode: string;
  noteToBuyer: string;
}


export interface TransactionResponse {
  status: number,
  message: string,
  success: boolean;
  transactionId: string;
}