import styles from '@/styles/Job.module.css'
import Image from 'next/image'

const Job = (props) => {
   
    const viewJob = () => {
        props.handleJobClick(props.job)
    }

    return (
        <div className={styles['card']} onClick={viewJob}>
            <div className={styles['logo']}>
                <Image
                    src={`/${props.job.logo}`}
                    alt="Company Logo"
                    width={80}
                    height={50}
                />
            </div>
            <div className={styles['job-title']}>{props.job['job-title']}</div>
            <div className={styles['company-name']}>{props.job['company-name']}</div>
            <div className={styles['location']}>{props.job['location']}</div>
            <div className={styles['salary']}>{props.job['salary']}</div>
            <ul>
                {
                    props.job['job-highlights'].map(highlight=>(
                        <li key={highlight} className={styles['job-highlights']}>{highlight}</li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default Job;