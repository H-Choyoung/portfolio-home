import router from "./router.js";

const pageRouteEvent = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        history.pushState(null, null, e.target.href);
        router();
      }
    });
    router();
  });
  // 뒤로가기시에도 데이터 나오게
  window.addEventListener('popstate', () => {
    router();
  });
};
export default pageRouteEvent;