import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTextarea,
  IonButton,
  IonButtons,
  IonBackButton,
  IonInput
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory, useLocation } from 'react-router';

function LinkEmail() {
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: any) => {
    const email = e.target.value;
    setEmail(email);
    setEmailIsValid(validateEmail(email));
  };

  const onContinue = () => {
    if (validateEmail(email)) {
      history.push('/sign-in/otp', {
        email
      });
    } else {
      toast.error('Please enter a valid email address');
      setEmailIsValid(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* @ts-ignore */}
          {location.state?.connectNewWallet && (
            <IonButtons slot="start">
              <IonBackButton
                defaultHref="/email/linked-check"
                text={''}
                icon={arrowBackOutline}
                color="dark"
              />
            </IonButtons>
          )}
          <IonTitle className="text-center font-inter font-700 text-lg">
            Link your email
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => history.push('/allow-access')}>
              Skip
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false} aria-hidden="true">
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">
            Add an email to secure your account and enable additional features
          </p>

          <IonInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={handleEmailChange}
            className="bg-white rounded-[16px] p-12"
          />

          <IonButton
            className="w-full"
            disabled={!emailIsValid}
            onClick={onContinue}
          >
            Continue
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default LinkEmail;
