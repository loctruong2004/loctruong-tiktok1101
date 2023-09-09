import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Login from '~/pages/Login'
import Profiles from '~/pages/Profile'
import {HeaderOnly}  from '~/component/Layout';
import  routeConfig from '~/config/routes'
const publicRoutes = [
   {path :routeConfig.Home,component:Home},
   {path :routeConfig.following,component:Following},
   {path :routeConfig.nickname,component:Profiles},
   {path :routeConfig.upload,component:Upload,layout:null},
   {path :routeConfig.login,component:Login,layout:null},
]
const privateRoutes=[
    
]

export {publicRoutes,privateRoutes};