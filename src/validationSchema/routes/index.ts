import * as yup from 'yup';

export const routeValidationSchema = yup.object().shape({
  optimization: yup.string().required(),
  delivery_driver_id: yup.string().nullable(),
});
