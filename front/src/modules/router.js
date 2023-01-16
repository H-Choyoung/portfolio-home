import MAIN from "../page/main.js";
import ABOUT from "../page/about.js";
import PORTFOLIO from "../page/portfolio.js";
import CONTACT from "../page/contact.js";
import ETC from "../page/etc.js";
import NotFound from "../page/NotFound.js";

const router = async () => {
  const routes = [
    // { path: '/', view: MAIN },
    { path: '/ABOUT', view: ABOUT },
    { path: '/PORTFOLIO', view: PORTFOLIO },
    { path: '/CONTACT', view: CONTACT },
    { path: '/ETC', view: ETC },
    { path: '/MAIN', view: MAIN },
  ];
  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });
  let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
  console.log(new match.route.view());
  if (!match) {
    match = {
      route: location.pathname,
      isMatch: true,
    };
    const page = new NotFound();
    document.querySelector('#main').innerHTML = await page.getHtml();
  } else {
    const page = new match.route.view();
    document.querySelector('#main').innerHTML = await page.getHtml();
    console.log(page);
  }
};

export default router;