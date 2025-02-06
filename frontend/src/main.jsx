// importing the createRoot function from React-Dom  to render the application
import { createRoot } from 'react-dom/client'
// importing the main App component
import App from './App.jsx'
// importing the global css file
import './index.css'
//importing BrowserRouter from react-router-dom to enable routing in the app
//Browser router to enable routing in your app(so we can navigate between different pages )
import { BrowserRouter } from 'react-router-dom'
import  AppContextProvider  from './context/AppContext.jsx'
//((document.getElementById('root')).render()  this part select the HTML element with id of root in HTML file
createRoot(document.getElementById('root')).render(
  // <App />this wrap the entire application
<BrowserRouter>
<AppContextProvider>
<App /> 
</AppContextProvider>
 
</BrowserRouter>,
)
 
