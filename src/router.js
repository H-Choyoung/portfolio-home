import ABOUT from "/about";

const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('main') },
    { path: '/ABOUT', view: ABOUT },
    { path: '/PORTFOLIO', view: () => console.log('portfolio') },
  ];
  const pageMatches = routes.map(route => {
    return {
      route,
      isMatch: route.path === location.pathname
    };
  });
  let match = pageMatches.find(pageMatch => pageMatch.isMatch);
  const page = new match.route.view();
  document.querySelector('#main').innerHTML = await page.getHtml();
  // console.log(match.route.view);

};
// router();
export default router;