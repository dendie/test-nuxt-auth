import { defineEventHandler, readBody, setCookie } from 'h3';
import { getUser } from '../repositories/user';
import { validateLogin } from '../services/validateLogin';

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);

  const validationResult = validateLogin({ username, password });
  if (!validationResult.success) {
    return { success: false, message: validationResult.error };
  }

  const userValid = await getUser(username, password);
  if (!userValid) {
    return { success: false, message: 'Invalid credentials' };
  }

  const sessionId = `${username}-${Date.now()}`;
  setCookie(event, 'session_id', sessionId);

  return { success: true };
});