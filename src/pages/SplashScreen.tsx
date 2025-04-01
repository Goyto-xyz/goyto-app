import { IonButton } from '@ionic/react';

import LogoSVG from '@/assets/images/logo.svg';

const SplashScreen = () => {
  return (
    <div className="bg-[#A2D2FF] flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <img src={LogoSVG} alt="Logo" className="w-[185]" />
      </div>
      <div className="flex flex-col gap-5 p-6">
        <IonButton color="secondary">Sign in</IonButton>
        <IonButton>Create account</IonButton>
      </div>
    </div>
  );
};

export default SplashScreen;
