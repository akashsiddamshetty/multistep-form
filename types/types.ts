export interface addons {
  id: number;
  title: string;
  content: string;
  monthly_amount: number;
  yearly_amount: number;
}

export interface subscriptionPlan {
  id: string;
  title: string;
  src: string;
  monthly_amount: number;
  yearly_amount: number;
  free: string;
}
