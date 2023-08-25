import { jobModel } from '~entities/job';
import { Job } from '~entities/job/api/jobApi';

import { JobDetails } from './styled';

export function JobPage() {
  const selectedJob: Job | null = jobModel.useSelectedJob();
  if (!selectedJob) return <div className="job-page">
    <div className="banner">
      <div className="container">
        <h1>No job selected</h1>
        <div className='description'>Select a a job from preveous page</div>
      </div>
    </div>
  </div>

  const {
    skills,
    description,
    name,
    location,
    categories,
    english_level,
    experience_level,
    price,
    min_price,
    project_duration,
    status,
    total_hire,
    total_proposal,
    total_message,
    type,
    budget_type,
    can_send_proposal,
    contract_start,
    is_feature,
    is_proposal_send,
    is_saved,
    isSendOffer,
    created_at
  } = selectedJob;

  return (
    <div className="job-page">
      <div className="banner">
        <div className="container">
          <h1>{name}</h1>
          <div className='description'>{description}</div>
        </div>
      </div>
      <div className="container page">
        <div className="row job-content">
          <div className="col-md-12">
            <JobDetails className="job-details">
              <p>Location: {location}</p>
              <p>Category: {categories}</p>
              <p>English Level: {english_level}</p>
              <p>Experience Level: {experience_level}</p>
              <p>Price: ${price}</p>
              <p>Min Price: ${min_price}</p>
              <p>Project Duration: {project_duration}</p>
              <p>Status: {status}</p>
              <p>Total Hire: {total_hire}</p>
              <p>Total Message: {total_message}</p>
              <p>Total Proposal: {total_proposal}</p>
              <p>Type: {type}</p>
              <p>Budget Type: {budget_type}</p>
              <p>Can Send Proposal: {can_send_proposal ? 'Yes' : 'No'}</p>
              <p>Contract Start: {contract_start ? 'Yes' : 'No'}</p>
              <p>Is Feature: {is_feature}</p>
              <p>Is Proposal Send: {is_proposal_send}</p>
              <p>Is Saved: {is_saved}</p>
              <p>Is Send Offer: {isSendOffer ? 'Yes' : 'No'}</p>
              <p>Created At: {created_at}</p>
            </JobDetails>
            <ul className="filter-list">
              <h5>Skills:</h5>
              {skills.map((skill) => (
                <li key={skill.name} className="filter-default filter-pill filter-outline">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
