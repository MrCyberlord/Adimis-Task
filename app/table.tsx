import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { User } from '../components/userType' 

export default function Home() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Table1')
        .select('*')

      if (error) {
        console.error('Error fetching data:', error)
      } else {
        console.log('Data fetched successfully:', data)
        const usersData = data?.map(user => ({
          ...user,
          created_at: new Date(user.created_at) 
        })) || [];
        setUsers(usersData)
      }
    }

    fetchData()
  }, [])
console.log(users)
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.User} - {user.created_at.toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  )
}
