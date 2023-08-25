import { StateCreator, createStore, useStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Job } from '../api/jobApi';

type JobState = {
  job: Job | null;
  setSelectedJob: (job: Job) => void;
  jobs: Job[] | [];
  setJobs: (jobs: Job[]) => void;
};

const createJobSlice: StateCreator<
JobState,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  JobState
> = (set) => ({
  jobs: [],
  setJobs: (jobs: Job[]) => {
    set({ jobs }, false, 'job/setCurrentJobs');
  },
  job: null,
  setSelectedJob: (job: Job) => {
    set({ job }, false, 'job/setSelectedJob');
  }
});

export const jobStore = createStore<JobState>()(
  persist(
    devtools(
      (...a) => ({
        ...createJobSlice(...a),
      }),
      { name: 'Job Store' },
    ),
    {
      name: 'job',
      storage: undefined, 
    },
  ),
);

export const useCurrentJobs = () =>
  useStore(jobStore, (state) => state.jobs);

export const useSelectedJob = () =>
  useStore(jobStore, (state) => state.job);

export const useSetCurrentJob = (job: Job) => jobStore.getState().setSelectedJob(job);

export const useSetSelectedJobs = (jobs: Job[]) => jobStore.getState().setJobs(jobs);