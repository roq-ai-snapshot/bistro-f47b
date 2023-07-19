import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RouteInterface {
  id?: string;
  optimization: string;
  delivery_driver_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface RouteGetQueryInterface extends GetQueryInterface {
  id?: string;
  optimization?: string;
  delivery_driver_id?: string;
}
