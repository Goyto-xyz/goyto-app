import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function CreateAccount() {
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
      history.push('/auth/otp', {
        email,
        action: 'createAccount'
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
          <IonButtons slot="start">
            <IonBackButton text={''} icon={arrowBackOutline} />
          </IonButtons>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Create account
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">
            Enter your email address to continue
          </p>

          <IonInput
            type="email"
            placeholder="hello@goyto.xyz"
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

          <div className="flex items-center justify-between gap-3 w-full">
            <div className="w-full border-b border-[rgba(0,0,0,0.2)]"></div>
            <p className="text-sm text-center">or</p>
            <div className="w-full border-b border-[rgba(0,0,0,0.2)]"></div>
          </div>

          <IonButton
            color="secondary"
            className="w-full"
            onClick={() => history.push('/sign-up/wallet')}
          >
            Connect wallet
          </IonButton>

          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/sign-in" className="font-bold">
              <span className="text-black underline">Sign in here</span>
            </Link>
          </p>

          <p className="mt-2 text-xs text-center">
            By using Goyoto you agree to{' '}
            <a href="#">
              <span className="text-black underline">our terms</span>
            </a>{' '}
            and{' '}
            <a href="#">
              <span className="text-black underline">privacy policy</span>
            </a>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default CreateAccount;
