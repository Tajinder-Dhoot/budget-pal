import React from 'react'
import { Stack, VStack, Input, Button, Center } from '@chakra-ui/react'

function SingUp() {
  return (
    <VStack>
        <h1>Fill in details to Sign Up</h1>
        <Input variant='outline' placeholder='Username' width='80%' />
        <Input variant='outline' placeholder='Password' width='80%' />
        <Button colorScheme='teal' variant='outline' width='30%' >Sign Up</Button>
    </VStack>
  )
}

export default SingUp