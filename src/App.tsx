import { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Storage } from '@ionic/storage';
import {
  ChatCircleText,
  NavigationArrow,
  IdentificationBadge
} from '@phosphor-icons/react';

import Message from './pages/Message';
import MainScreen from './pages/MainScreen';
import Tab3 from './pages/Tab3';

import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/tailwind.css';
import './theme/variables.css';

import SplashScreen from './pages/Splash';
import SignInScreen from './pages/SignIn';
import CreateAccountScreen from './pages/CreateAccount';

setupIonicReact({
  rippleEffect: false,
  mode: 'ios'
});

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const storage = new Storage();

  useEffect(() => {
    const checkFirstTimeUser = async () => {
      await storage.create();
      const token = await storage.get('auth_token');
      setIsLoggedIn(!!token);
    };

    checkFirstTimeUser();
  }, []);

  if (isLoggedIn === null) return null;

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            {isLoggedIn ? <p>Home</p> : <SplashScreen />}
          </Route>
          <Route exact path="/signin" component={SignInScreen} />
          <Route exact path="/create-account" component={CreateAccountScreen} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
