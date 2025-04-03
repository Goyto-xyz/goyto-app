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

function SignInWithEmail() {
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
          <IonButtons slot="start">
            <IonBackButton text={''} icon={arrowBackOutline} />
          </IonButtons>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Sign in
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false} aria-hidden="true">
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-6">
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

          <div className="w-full border-b border-[rgba(0,0,0,0.2)]"></div>

          <IonButton color="secondary" className="w-full">
            Connect wallet
          </IonButton>

          <p className="text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold">
              <span className="text-black underline">Sign up now</span>
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

export default SignInWithEmail;
