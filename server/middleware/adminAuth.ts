import { defineEventHandler, getCookie } from 'h3';

export default defineEventHandler((event) => {
  const session = getCookie(event, 'session_id');
  if (session && event.path !== '/home') {
    return sendRedirect(event, '/home');
  }
});