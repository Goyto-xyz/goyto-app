import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';

function NewWallet() {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={''} icon={arrowBackOutline} />
          </IonButtons>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Your new wallet
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">Wallet address</p>
          <IonTextarea
            autoGrow
            disabled
            className="bg-[#BDE0FE] p-4 rounded-2xl w-full"
          >
            0x06Dd90bE1C00DE72BCdb250879E49d676E966fD4C9959f23D8B56Fa0e9171E50
          </IonTextarea>

          <IonButton
            className="w-full"
            onClick={() => router.push('/wallet/recovery-phrase')}
          >
            Continue
          </IonButton>

          <p
            className="text-sm"
            onClick={() => router.push('/wallet/creating')}
          >
            <span className="text-black underline">Regenerate wallet</span>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default NewWallet;
