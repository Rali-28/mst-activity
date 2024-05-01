import React from 'react'
import { Toaster } from './ui/sonner'
import { toast } from 'sonner'
import { Button } from './ui/button'

const Sonner = ({title , msg}) => {
  return (
    <div>
        <Toaster position='top-center' />
        <Button
        variant="outline"
        onClick={() =>
          toast.error(msg)
        }
      >
        {title}
      </Button>
    </div>
  )
}

export default Sonner