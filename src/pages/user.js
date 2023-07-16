// import styles from '@/styles/ListJobs.module.css'
import NavBar from "@/components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState('')

    const router = useRouter()

    useEffect(()=>{
        axios.get('/json/users.json').then(res=>{
            setUsers(res.data.users)
        }).catch(err=>{
            console.log('error', err)
        })

        setUser(JSON.parse(localStorage.getItem('user')))

        // console.log('user: ', JSON.parse(localStorage.getItem('user')))

        if(JSON.parse(localStorage.getItem('user'))?.role === 'applicant'){
            console.log('1')
            router.push('/')
        }else if(JSON.parse(localStorage.getItem('user'))?.role === 'recruiter'){
            console.log('2')
            router.push('/post-job')
        }else{
            console.log('3')
            router.push('/login')
        }
    }, [])

    if(user?.role === 'admin'){
        return (
            <div>
                <NavBar/>
                <h1>USERS</h1>
                {
                    users.map(user=>(
                        <h3 key={user.id}>{user.name}</h3>
                    ))
                }
            </div>
        );
    }else{
        <></>
    }
    
}
 
export default Users;