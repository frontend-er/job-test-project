import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PATH_PAGE } from '~shared/lib/react-router';
import { Job } from '../../api/jobApi';
import { jobModel } from '~entities/job';
import { Tag } from '~shared/ui/tag';
import { JobPreviewCardStyled, JobPreviewCardStyledWrapper } from './styled';

type JobPreviewCardProps = {
  job: Job;
  meta?: ReactNode;
};

export function JobPreviewCard(props: JobPreviewCardProps) {
  const { job } = props;
  const { name, description, price, location, skills } = job;
  const setSelectedJob = () => jobModel.useSetCurrentJob(job);

  return (
    <div className="job-preview" onClick={setSelectedJob}>
      <JobPreviewCardStyledWrapper>
        <JobPreviewCardStyled className="info">
          Required skills:
        </JobPreviewCardStyled>
        {skills.map((skill) => (
          <Tag color='#CB8589' key={skill.id} name={skill.name}/>
        ))}
      </JobPreviewCardStyledWrapper>
      Jod Preview Card - <Tag color='#5B5941' name={price + '$'}/> - {location}
      <Link to={PATH_PAGE.job.slug()} className="preview-link">
        <h1>{name}</h1>
        <p>{description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}
