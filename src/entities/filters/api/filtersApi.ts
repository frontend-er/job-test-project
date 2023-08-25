import { useQuery } from '@tanstack/react-query';
import { realworldApi } from '~shared/api/realworld';

export type Filters = {
  name: string;
};

export const filterKeys = {
  filters: {
    root: ['filters'],
    global: () => [...filterKeys.filters.root, 'global'],
  },
};

export const useGlobalFilters = () =>
  useQuery<Filters[], Filters[], Filters[]>({
    queryKey: filterKeys.filters.global(),
    queryFn: async ({ signal }) => {
      const response:any = await realworldApi.filters.getFilters();
      return response.data.data;
    },
  });
