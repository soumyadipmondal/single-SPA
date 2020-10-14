import { registerApplication, start } from 'single-spa'

pathPrefix = (path)=>{
    return (location)=>{
        return location.pathname.startsWith(path);
    }
}
registerApplication(
  // Name of our single-spa application
  'angular',
  // loadingFunction
  () => import ('./src/angularJS/angularJS.app.js').then(module => module.angular),
  // activityFunction
  /* (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home') */
    pathPrefix("/angular")

);
start();