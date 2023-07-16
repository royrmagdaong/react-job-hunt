import NavBar from "@/components/NavBar";
import Filter from "@/components/Filter";
import ListJobs from "@/components/ListJobs";
import ViewJob from "@/components/ViewJob";
import styles from '@/styles/MainLayout.module.css'

import { useState, useEffect } from "react";
import axios from 'axios'

const MainLayout = () => {
    const [jobs, setJobs] = useState([])
    const [job, setJob] = useState([])

    useEffect(()=>{
        axios.get('/json/jobPosts.json')
        .then(res=>{
            // console.log(res)
            setJobs(res.data.jobPosts)
            setJob(res.data.jobPosts[0])
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    const handleJob = (job) =>{
        setJob(job)
        console.log('Job: ', job)
    }

    return ( 
        <div>
            <NavBar></NavBar>
            <Filter></Filter>
                
            <div className={styles['main-content']}>
                
                <ListJobs jobs={jobs} handleJob={handleJob}></ListJobs>
                <ViewJob job={job}></ViewJob>
            </div>
        </div>
     );
}
 
export default MainLayout;