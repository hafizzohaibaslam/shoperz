import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const dummy = createAsyncThunk('dummy/accessory', async () => {
  const response = await axios.get('http://localhost:5000/api/dummy')

  return response.data
  // whatever you return right here is going to be automatically assigned to the payload property of the fulfilled action type
})

export {dummy}
