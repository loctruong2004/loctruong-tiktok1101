import './App.css'  
import {Fragment} from 'react' 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'
import {DefaultLayout}  from '~/component/Layout';
function App(){
  return (
       <Router >
         <div className='App'>
          <Routes>
             {publicRoutes.map((route,index)=>{
              let Layout=DefaultLayout;
              // const Layout=route.layout===null?Fragment:DefaultLayout;
              if(route.layout){
                Layout=route.layout;
              }else if(route.layout===null){
                Layout=Fragment;
              }
              // switch(route.layout){
              //   case null:
              //     Layout=Fragment
              //     break;
              //   case undefined:
              //     Layout=DefaultLayout;
              //     break;
              //     default:
              //       Layout=route.layout;
              // }
              const Page = route.component
              return <Route  path={route.path} key={index} element={<Layout><Page/></Layout>}/>
             })}
          </Routes>
          </div>       
       </Router>


  )
}

export default App