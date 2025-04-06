import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { useHistory, useLocation } from 'react-router';

function OTPVerification() {
  const history = useHistory();
  const location = useLocation();
  // @ts-ignore
  const email = location.state?.email || '';
  // @ts-ignore
  const action = location.state?.action || '';

  const [otp, setOtp] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const onOtpChange = (_otp: string) => {
    setOtp(_otp);
    setDisabled(_otp.length !== 6);
  };

  const handleResendOTP = () => {
    setCanResend(false);
    setCountdown(30);

    // TODP: Implement resend OTP logic here
  };

  const onVerifyOTP = () => {
    // TODO: Implement OTP verification logic here
    switch (action) {
      case 'createAccount':
        history.push('/wallet/link', {
          action: 'createAccount'
        });
        break;
      case 'signIn':
        history.push('/wallet/linked-check');
        break;
      case 'linkEmail':
        history.push('/allow-access');
        break;
      default:
        break;
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
            Enter OTP Code
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <p className="text-lg text-center">
            We've sent a verification code to <strong>{email}</strong>
          </p>

          <OTPInput
            value={otp}
            onChange={onOtpChange}
            numInputs={6}
            renderSeparator={<span className="w-2" />}
            renderInput={props => (
              <input
                {...props}
                className="bg-white w-12! h-12 rounded-xl text-center text-xl! font-medium!"
              />
            )}
          />

          <IonButton
            className="w-full"
            disabled={disabled}
            onClick={onVerifyOTP}
          >
            Verify
          </IonButton>

          <p className="text-sm font-bold">
            Didn't receive code?{' '}
            {canResend ? (
              <span className="text-black underline" onClick={handleResendOTP}>
                Resend OTP
              </span>
            ) : (
              <span className="text-black underline">
                Resend in {countdown}s
              </span>
            )}
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default OTPVerification;
