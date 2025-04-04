import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
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
import CreateAccountScreen from './pages/CreateAccount';

import OTPVerification from './pages/auth/OTPVerification';
import SignInScreen from './pages/auth/SignIn';
import SignInWithEmail from './pages/auth/SignInWithEmail';
import SignInWithWallet from './pages/auth/SignInWithWallet';

import EmailLinkedCheck from './pages/email/EmailLinkedCheck';
import CreateWallet from './pages/wallet/CreateWallet';
import LinkWallet from './pages/wallet/LinkWallet';
import WalletLinkedCheck from './pages/wallet/WalletLinkedCheck';
import LinkEmail from './pages/email/LinkEmail';

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
          {/* Main App */}
          <Route exact path="/">
            {isLoggedIn ? <p>Home</p> : <SplashScreen />}
          </Route>

          {/* Auth */}
          <Route exact path="/sign-in" component={SignInScreen} />
          <Route exact path="/sign-in/email" component={SignInWithEmail} />
          <Route exact path="/sign-in/wallet" component={SignInWithWallet} />
          <Route exact path="/sign-in/otp" component={OTPVerification} />
          <Route exact path="/create-account" component={CreateAccountScreen} />

          {/* Wallet and Email Linking */}
          <Route
            exact
            path="/email/linked-check"
            component={EmailLinkedCheck}
          />
          <Route exact path="/email/link" component={LinkEmail} />
          <Route exact path="/wallet/link" component={LinkWallet} />
          <Route
            exact
            path="/wallet/linked-check"
            component={WalletLinkedCheck}
          />
          <Route exact path="/wallet/create" component={CreateWallet} />
          {/* 
          <Route exact path="/wallet/import" component={ImportWallet} /> */}

          {/* Permissions & Profile Setup */}
          {/* <Route exact path="/allow-access" component={AllowAccess} /> */}
          {/* <Route exact path="/enable-notifications" component={EnableNotifications} />
          <Route exact path="/create-profile" component={CreateProfile} /> */}
        </IonRouterOutlet>
        <Toaster position="top-center" />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
