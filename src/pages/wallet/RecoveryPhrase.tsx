import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { Check, Warning } from '@phosphor-icons/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function RecoveryPhrase() {
  const recoveryPhrase = [
    'hair',
    'again',
    'mixed',
    'slide',
    'gloom',
    'artefact',
    'poem',
    'hidden',
    'general',
    'glare',
    'small',
    'garlic'
  ];
  const history = useHistory();
  const [countdown, setCountdown] = useState(5);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={''} icon={arrowBackOutline} color="dark" />
          </IonButtons>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Backup you recovery phrase
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false} aria-hidden="true">
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <div
            className={`grid grid-cols-3 gap-4 w-full ${
              revealed ? '' : 'blur-sm'
            }`}
          >
            {recoveryPhrase.map((word, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-1"
              >
                <span className="w-[20%] text-right">{index + 1}.</span>
                <div className="bg-[#BDE0FE] rounded-xl text-center py-2 w-[80%]">
                  {word}
                </div>
              </div>
            ))}
          </div>

          <CopyToClipboard
            text={recoveryPhrase.join(' ')}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000); // reset sau 2s
            }}
          >
            <p className="text-center font-semibold">
              {copied ? (
                <span className="flex items-center justify-center gap-1">
                  <Check size={24} /> Copied!
                </span>
              ) : (
                'Copy to clipboard'
              )}
            </p>
          </CopyToClipboard>

          <div className="text-sm py-4">
            <div className="font-bold text-[#FB8500] mb-2">
              <div className="flex items-center gap-2">
                <Warning size={24} weight="bold" />
                <span>DO NOT share your recovery phrase with ANYONE</span>
              </div>
            </div>
            <p className="mb-3">
              Anyone with your recovery phrase can have full control over your
              assets. Please stay vigilant against phishing attacks at all
              times.
            </p>
            <div className="font-bold text-[#FB8500] mb-2">
              <div className="flex items-center gap-2">
                <Warning size={24} weight="bold" />
                <span>Back up the phrase safely</span>
              </div>
            </div>
            <p>
              You will never be able to restore your account without your
              recovery phrase.
            </p>
          </div>

          <IonButton
            className="w-full text-sm"
            disabled={countdown > 0}
            onClick={
              revealed
                ? () => history.push('/wallet/verify-phrase')
                : () => setRevealed(true)
            }
          >
            {revealed ? (
              <span>Next</span>
            ) : (
              <span>
                I understood. Show my phrase{' '}
                {countdown > 0 ? `(${countdown})` : ''}
              </span>
            )}
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default RecoveryPhrase;
