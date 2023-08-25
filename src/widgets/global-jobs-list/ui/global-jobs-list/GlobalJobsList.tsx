import { InfiniteData } from '@tanstack/react-query';
import {
  jobApi,
  JobPreviewCard,
  JobsList,
} from '~entities/job';
import { Job } from '~entities/job/api/jobApi';
import { Button } from '~shared/ui/button';

type GlobalJobsListProps = {
  query?: jobApi.GlobalfeedQuery;
};

export function GlobalJobsList(props: GlobalJobsListProps) {
  const { query } = props;

  const {
    data: jobsData,
    status: jobsStatus,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = jobApi.useGlobalInfinityJobs(query || {});

  return (
    <JobsList
      isLoading={jobsStatus === 'loading'}
      isError={jobsStatus === 'error'}
      isSuccess={jobsStatus === 'success'}
      hasNextPage={hasNextPage}
      error={error as any}
      infinityJobs={jobsData as InfiniteData<Job[]>}
      renderJobs={(job) => (
        <JobPreviewCard
          key={job.id}
          job={job}
          meta={
            <div className="job-meta">
              @by Bajenov
            </div>
          }
        />
      )}
      nextPageAction={
        <Button
          color="primary"
          variant="outline"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </Button>
      }
    />
  );
}
