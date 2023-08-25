import {
  useInfiniteQuery,
} from '@tanstack/react-query';
import { API_PAGE_LIMIT } from '~shared/api/msw/config/constants';

import { realworldApi } from '~shared/api/realworld';


export interface Job {
  budget_type: "fixed" | "hourly"
  can_send_proposal: boolean,
  categories: string,
  category_id: string,
  client_id: number,
  contract_start: boolean,
  created_at: string,
  description: string,
  english_level: "fluent" | "native" | "basic",
  experience_level: "Pro" | "Intermediate" | "Entry",
  id: number,
  image: string,
  image_name: string,
  isSendOffer: boolean,
  is_feature: number,
  is_proposal_send: number,
  is_saved: number,
  location: string,
  min_price: number,
  name: string,
  price: number,
  project_duration: string,
  scop: string,
  skills: {
    name: string,
    id: number
  }[],
  status: string,
  total_hire: number,
  total_message: number,
  total_proposal: number,
  type: "short_term" | "long_term",
}

export type GlobalfeedQuery = {
  filter?: string;
  amountFilter?: {
    from?: number;
    to?: number;
  }
};


export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  secure?: boolean;
  path: string;
  body?: unknown;
  baseUrl?: string;
  page?: number;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export const jobKeys = {
  jobs: {
    root: ['jobs'],
    globalFeed: {
      root: () => [...jobKeys.jobs.root, 'globalFeed'],
      query: (query: GlobalfeedQuery) => [
        ...jobKeys.jobs.globalFeed.root(),
        query,
      ],
    },
  },

  job: {
    root: ['job'],
    slug: (slug: string) => [...jobKeys.job.root, slug],
  },
};

export const useGlobalInfinityJobs = (
  query: GlobalfeedQuery,
  params?: RequestParams,
) => {
  return useInfinityJobs({
    queryKey: jobKeys.jobs.globalFeed.query(query),
    queryFn: realworldApi.jobs.getJobs,
    query,
    params,
  });
}

const useInfinityJobs = ({
  queryKey,
  queryFn,
  query,
  params,
}: any) => {

  const { filter, amountFilter } = query;
  return useInfiniteQuery<Job[], Job[], unknown[]>({
    queryKey,
    queryFn: async ({ pageParam, signal }) => {
      const response = await queryFn(
        { ...params, page: pageParam + 1 },
      );

      // will be refactored then we will have backend filters for it
      if (filter) {
        const filteredArray = response.data.data.filter((item: Job) => {
          return item.skills.some(skill => skill.name === filter);
        });
        response.data.data = filteredArray;
      }

      // will be refactored then we will have backend filters for it
      if (amountFilter && amountFilter.from !== undefined && amountFilter.to !== undefined) {
      
        const filteredArray = response.data.data.filter((item: Job) => {

          if(amountFilter.to === 0) return item.price >= amountFilter.from;
          if(amountFilter.from === 0) return item.price <= amountFilter.to;

          return item.price >= amountFilter.from && item.price <= amountFilter.to;
        });
      
        response.data.data = filteredArray;
      }

      return response.data.data;
    },

    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < API_PAGE_LIMIT) return null;

      const nextPageParam = lastPage.length ? pages.length * 1 : null;

      return nextPageParam;
    },
  });
};
