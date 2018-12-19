import HomeContainer from "../containers/Home";
import AboutContainer from "../containers/About/About";

export const PATHS = Object.freeze({
  INDEX: '/',
  ABOUT: '/about',
  ITEMS: '/items',
  ITEM_DETAILS: '/items/:id',
  DASHBOARD1:"/dashboard1",
  DASHBOARD2:"/dashboard2",
  LIFTING:"/lifting",
  TODOS:"/todos",
  SIGNUP:"/signup",
  LOGIN:"/login",
});

export const ROUTES = Object.freeze([
  {
    path: PATHS.INDEX,
    component: HomeContainer
  },
  {
    path: PATHS.ABOUT,
    component: AboutContainer
  }
]);

 export const ACTIVE_LINK = {
  fontWeight: "bold",
  color: "white",
  backgroundColor:"#177997",
}