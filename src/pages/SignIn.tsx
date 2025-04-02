import {
  IonBackButton,
  IonIcon,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  useIonRouter,
  IonButtons,
  IonList,
  IonItem
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { Wallet, EnvelopeOpen, CaretRight } from '@phosphor-icons/react';

const SignInScreen = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={''} icon={arrowBackOutline} />
          </IonButtons>
          <IonTitle className="text-center font-inter font-700 text-[18px]">
            Sign in
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <IonList lines="inset">
          <IonItem className="bg-[#A2D2FF]">
            <div
              className="flex w-full items-center py-4"
              onClick={() => router.push('/signin-wallet')}
            >
              <div className="bg-[#BDE0FE] p-3 rounded-full">
                <Wallet size={24} />
              </div>
              <span className="flex-1 text-lg ml-4">Sign in with wallet</span>
              <CaretRight size={24} />
            </div>
          </IonItem>

          <IonItem className="bg-[#A2D2FF]">
            <div
              className="flex w-full items-center py-4"
              onClick={() => router.push('/signin-email')}
            >
              <div className="bg-[#BDE0FE] p-3 rounded-full">
                <EnvelopeOpen size={24} />
              </div>
              <span className="flex-1 text-lg ml-4">Sign in with email</span>
              <CaretRight size={24} />
            </div>
          </IonItem>
        </IonList>
        <div className="">
          {/* <div
            className="flex items-center p-4"
            onClick={() => history.push('/signin-email')}
          >
            <div className="bg-[#A2D2FF] p-3 rounded-full">
              <IonIcon icon={mail} size="large" color="dark" />
            </div>
            <span className="flex-1 text-lg ml-4">Sign in with email</span>
            <IonIcon icon={arrowForward} size="large" color="dark" />
          </div> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignInScreen;
