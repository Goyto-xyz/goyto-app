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

function EmailLinkedCheck() {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Your email
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">Your linked email</p>
          <IonTextarea
            autoGrow
            disabled
            className="bg-[#BDE0FE] p-4 rounded-2xl w-full"
          >
            johndoe@gmail.com
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
              history.push('/email/link', {
                connectNewWallet: true
              })
            }
          >
            <span className="text-black underline">Connect other email</span>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default EmailLinkedCheck;
