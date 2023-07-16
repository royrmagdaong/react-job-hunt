import styles from '@/styles/ListJobs.module.css'
import Job from "@/components/Job";

const ListJobs = ({jobs, handleJob}) => {
    // console.log(jobs)

    const handleJobClick = (job) => {
        // console.log(job)
        handleJob(job)
    }

    return (
        <div className={styles['container']}>
            {
                jobs.map(job=>(
                    <Job key={job.id} job={job} handleJobClick={handleJobClick}></Job>
                ))
            }
        </div>
    );
}
 
export default ListJobs;