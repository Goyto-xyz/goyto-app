import { useIonRouter, IonButton } from '@ionic/react';

import LogoSVG from '@/assets/images/logo.svg';

const SplashScreen = () => {
  const router = useIonRouter();

  return (
    <div className="bg-[#A2D2FF] flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <img src={LogoSVG} alt="Logo" className="w-[185]" />
      </div>
      <div className="flex flex-col gap-5 p-6">
        <IonButton
          color="secondary"
          onClick={() => router.push('/signin', 'root', 'replace')}
        >
          Sign in
        </IonButton>
        <IonButton
          onClick={() => router.push('/create-account', 'root', 'replace')}
        >
          Create account
        </IonButton>
      </div>
    </div>
  );
};

export default SplashScreen;
