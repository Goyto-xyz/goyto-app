import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useHistory } from 'react-router';

function WalletLinkedCheck() {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Your wallet
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">Your linked Starknet wallet</p>
          <IonTextarea
            autoGrow
            disabled
            className="bg-[#BDE0FE] p-4 rounded-2xl w-full"
          >
            0x06Dd90bE1C00DE72BCdb250879E49d676E966fD4C9959f23D8B56Fa0e9171E50
          </IonTextarea>

          <IonButton
            className="w-full"
            onClick={() => history.push('/allow-access')}
          >
            Continue
          </IonButton>

          <p
            className="text-sm"
            onClick={() =>
              history.push('/wallet/link', {
                connectNewWallet: true
              })
            }
          >
            <span className="text-black underline">Connect other wallet</span>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default WalletLinkedCheck;
