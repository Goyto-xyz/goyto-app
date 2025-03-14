import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import {
  ChatCircleText,
  NavigationArrow,
  IdentificationBadge,
} from '@phosphor-icons/react'

import Message from './pages/Message'
import MainScreen from './pages/MainScreen'
import Tab3 from './pages/Tab3'

import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import './theme/tailwind.css'
import './theme/variables.css'

setupIonicReact({
  rippleEffect: false,
  mode: 'ios',
})

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/message">
            <Message />
          </Route>
          <Route exact path="/home">
            <MainScreen />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="message" href="/message">
            <ChatCircleText weight="bold" size={28} color="#000" />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg">
              <NavigationArrow
                size={30}
                weight="bold"
                color="#fff"
                className="rotate-90"
              />
            </div>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IdentificationBadge weight="bold" size={28} color="#000" />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
