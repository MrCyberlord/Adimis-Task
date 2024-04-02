'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import Home from './table1'

const page = () => {
  return (
    <div>
      <div>
      <Button variant={"blue"}>PushMe</Button>
     
      </div>
      <Home></Home>
    </div>
    
  )
}

export default page
