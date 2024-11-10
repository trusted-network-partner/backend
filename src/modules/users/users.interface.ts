export type EmploymentTypeOptions =
  | 'Full time'
  | 'Part time'
  | 'Self-employed'
  | 'Freelancer'
  | 'Internship';

export type VisibilityOptions =
  | 'All users'
  | 'All partners'
  | 'Only me'
  | 'Custom choose';

export interface User {
  id: string;
  name: string;
  surname: string;
  aboutUser: string;
  ref: string;
  typeAccount: 'Business account' | 'Personal account';
  role?:
    | 'Owner'
    | 'Manager'
    | 'Agent'
    | 'Lead'
    | 'Buyer'
    | 'Seller'
    | 'Coordinator'
    | 'Integrator'
    | 'Marketing'
    | 'Receptionist'
    | 'Team leader';

  categoryId?: string;
  category?: string;
  country: string;
  state: string;
  city: string;
  address: string;
  language: string;
  partners: number;
  listings: number;
  availableSlots?: number;
  customers?: number;
  leads?: number;
  buyers?: number;
  sellers?: number;
  followers?: number;
  photo?: string | null;
  phone: {
    type: string;
    value: string;
  }[];
  email: {
    type: string;
    value: string;
  }[];
  websiteSocial: {
    type: string;
    value: string;
  }[];

  experience: {
    id: string;
    logo: string;
    company: string;
    position: string;
    country?: string;
    city?: string;
    employmentType?: EmploymentTypeOptions | '';
    start: string;
    end: string;
    comment: string;
  }[];
  notificationDisplayProfile: boolean;
  notificationDisplayRealEstate: boolean;
  whoCanSendMePrivateMessage: boolean;
  notificationReceiveRequest: boolean;
  notificationBookingAViewing: boolean;
  notificationMakeAnOffer: boolean;
  receiveNotificationOfSharingLeadsFromOtherPartners: boolean;
  receiveNotificationOfNewAddedRealEstateByOtherPartners: boolean;
  notificationShowViewingData: boolean;
  verified: boolean;
  displayBlockCatalogue: 'Countries' | 'Type' | 'Class' | 'Market';
  displayComisionForPartners: VisibilityOptions;
  displayMyPartnersFor: VisibilityOptions;
  activateCommentsInMyPostsFor: VisibilityOptions;
  receiveInvitationToGroupBy: VisibilityOptions;
  receiveInvitationToEventsBy: VisibilityOptions;
  notificationPaymentByStatusInvoice: 'Failed' | 'Paid';
  alertUnreadedContacts: number;
  alertDeclinedBookingAViewing: number;
  notificationShowActivityOnTheMarketByTypeInDifferentCities: string;
  notificationShowPriceAnalysisByTypeInDifferentCities: string;
  notificationSubscriptionExpireDays: number;
  billingMethod: '' | 'E-Invoice' | 'Paper invoice';
  billingFor?:
    | null
    | 'Membership'
    | 'Subscription'
    | 'Per listing'
    | 'Per lead';
  billingCountry: string;
  billingState: string;
  billingAddress: string;
  postalCode: string;
  methodOfPayment: 'Bank account' | 'Card' | '';
  cyclePayment: '' | 'At the beginning' | 'At the end';
  company: string;
  yearCompanyFoundation: number;
  subscriptions?: 'Premium' | 'Freemium' | null;
  skills?: {
    id: string;
    properties: string[];
  }[];
  createdAt: string;
  updatedAt: string;
}
