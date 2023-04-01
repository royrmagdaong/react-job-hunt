import styles from '@/styles/Job.module.css'
import Image from 'next/image'

const Job = () => {
    return (
        <div className={styles['card']}>
            <div className={styles['logo']}>
                <Image
                    src="/company-a.jpg"
                    alt="Company Logo"
                    width={80}
                    height={50}
                />
            </div>
            <div className={styles['job-title']}>Job Title</div>
            <div className={styles['company-name']}>Company Name</div>
            <div className={styles['location']}>Location</div>
            <div className={styles['salary']}>25,000.00</div>
            <ul >
                <li className={styles['job-highlights']}>highlight 1</li>
                <li className={styles['job-highlights']}>highlight 2</li>
                <li className={styles['job-highlights']}>highlight 3</li>
            </ul>
        </div>
    );
}
 
export default Job;