import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

import AgentMobileSVG from '@/assets/images/agentx.svg';
import BraavosSVG from '@/assets/images/bravoos.svg';

function SignInWithWallet() {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/wallet/linked"
              text={''}
              icon={arrowBackOutline}
              color="dark"
            />
          </IonButtons>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Connect your wallet
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false} aria-hidden="true">
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">
            Use your Web3 wallet for seamless and secure login
          </p>

          <IonButton
            className="w-full"
            onClick={() => router.push('/email/linked-check')}
          >
            <IonIcon slot="start" src={AgentMobileSVG} />
            <span className="ml-[10px]">Argent Mobile</span>
          </IonButton>

          <IonButton
            className="w-full"
            onClick={() => router.push('/email/linked-check')}
          >
            <IonIcon slot="start" src={BraavosSVG} />
            <span className="ml-[10px]">Braavos</span>
          </IonButton>

          <div className="w-full border-b border-[rgba(0,0,0,0.2)]"></div>

          <IonButton
            color="secondary"
            className="w-full"
            onClick={() => router.push('/sign-in/email')}
          >
            Sign in with email
          </IonButton>

          <p className="mt-2 text-xs text-center">
            By using Goyoto you agree to{' '}
            <a href="#">
              <span className="text-black underline">our terms</span>
            </a>{' '}
            and{' '}
            <a href="#">
              <span className="text-black underline">privacy policy</span>
            </a>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default SignInWithWallet;
