import { useIonRouter, IonButton, IonPage } from '@ionic/react';

import LogoSVG from '@/assets/images/logo.svg';

const SplashScreen = () => {
  const router = useIonRouter();

  return (
    <IonPage className="bg-[#A2D2FF] flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <img src={LogoSVG} alt="Logo" className="w-[185]" />
      </div>
      <div className="flex flex-col gap-5 p-6">
        <IonButton color="secondary" onClick={() => router.push('/signin')}>
          Sign in
        </IonButton>
        <IonButton onClick={() => router.push('/create-account')}>
          Create account
        </IonButton>
      </div>
    </IonPage>
  );
};

export default SplashScreen;
