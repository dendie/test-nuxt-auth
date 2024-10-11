import { defineEventHandler, getCookie, setCookie } from 'h3';

export default defineEventHandler(async (event) => {
  const session = getCookie(event, 'session_id');
  if (!session && event.path !== '/login') {
    return sendRedirect(event, '/login');
  }
});