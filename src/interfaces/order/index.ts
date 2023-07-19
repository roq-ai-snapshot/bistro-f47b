import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  restaurant_manager_id?: string;
  delivery_driver_id?: string;
  customer_service_rep_id?: string;
  created_at?: any;
  updated_at?: any;

  user_order_restaurant_manager_idTouser?: UserInterface;
  user_order_delivery_driver_idTouser?: UserInterface;
  user_order_customer_service_rep_idTouser?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  restaurant_manager_id?: string;
  delivery_driver_id?: string;
  customer_service_rep_id?: string;
}
