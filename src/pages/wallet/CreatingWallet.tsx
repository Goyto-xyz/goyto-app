import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/react';
import SecuritySVG from '@/assets/images/security.svg';
import { useEffect } from 'react';

function CreatingWallet() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/wallet/new';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Creating your wallet
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false} aria-hidden="true">
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">
            We're setting up your secure Web3 wallet. This may take a few
            seconds.
          </p>

          <img src={SecuritySVG} alt="Security" className="w-[400px]" />
        </div>
      </IonContent>
    </IonPage>
  );
}

export default CreatingWallet;
