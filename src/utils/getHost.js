export default function getHost() {
  return window.location.host === 'localhost:8080' ? 'http://localhost:8080/' : '/';
}
