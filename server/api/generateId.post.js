import { v4 as uuid } from 'uuid'

export default defineEventHandler(async (event) => {
  try {
    const uid = uuid()
    console.log(uid)
    return { id: uid };
  } catch (error) {
    return { message: error.message, error: true};
  }
});