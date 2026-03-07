export default async (request, context) => {
  const url = new URL(request.url);
  
  // Only intercept root path
  if (url.pathname !== '/') return context.next();
  
  const ua = request.headers.get('user-agent') || '';
  const isMSX = ua.includes('MSX') || ua.includes('MediaStation') || ua.includes('SMART-TV') || ua.includes('SmartTV');
  
  if (isMSX) {
    // Return start.json for MediaStationX
    const json = await fetch(new URL('/start.json', request.url));
    return new Response(await json.text(), {
      headers: { 'content-type': 'application/json' }
    });
  }
  
  // Return index.html for browsers
  return context.next();
};

export const config = { path: '/' };
