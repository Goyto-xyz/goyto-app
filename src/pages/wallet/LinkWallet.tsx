import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTextarea,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useHistory, useLocation } from 'react-router';

function LinkWallet() {
  const location = useLocation();
  const history = useHistory();

  //@ts-ignore
  const action = location.state?.action || '';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* @ts-ignore */}
          {location.state?.connectNewWallet && (
            <IonButtons slot="start">
              <IonBackButton text={''} icon={arrowBackOutline} color="dark" />
            </IonButtons>
          )}
          <IonTitle className="text-center font-inter font-700 text-lg">
            Link your wallet
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => history.push('/allow-access')}>
              Skip
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">
            To fully access Goyto’s Web3 features, link your Starknet wallet
            now. Your wallet is needed to claim rewards, check in securely, and
            verify ownership of collectibles.
          </p>

          <IonButton
            className="w-full"
            onClick={() =>
              history.push(
                action === 'createAccount'
                  ? '/sign-up/wallet'
                  : '/sign-in/wallet',
                {
                  action: 'linkWallet'
                }
              )
            }
          >
            Connect Wallet
          </IonButton>
          <IonButton
            className="w-full"
            color="secondary"
            onClick={() => history.push('/wallet/creating')}
          >
            Create new wallet
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default LinkWallet;
