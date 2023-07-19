const mapping: Record<string, string> = {
  orders: 'order',
  routes: 'route',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
