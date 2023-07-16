import styles from '@/styles/ViewJob.module.css'
import Image from 'next/image'

const ViewJob = (props) => {
    console.log(props)
    
    if(!props.job['job-title']){
        console.log('test')
        return <></>
    }

    return (
        <div className={styles['container']}>
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
            <div className={styles['job-description']}>
                <h4>Job Description</h4>
                <p>{props.job['job-description']}</p>
            </div>
            <div className={styles['company-info']}>
                <h4>Who we are</h4>
                <p>{props.job['who-we-are']}</p>
            </div>
        </div>
    );
}
 
export default ViewJob;