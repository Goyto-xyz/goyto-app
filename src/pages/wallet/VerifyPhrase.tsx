import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
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

function VerifyPhrase() {
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

  const [inputIndexes, setInputIndexes] = useState<number[]>([]);
  const [userInputs, setUserInputs] = useState<{ [key: number]: string }>({});

  const getRandomIndexes = () => {
    const indexes = new Set<number>();
    while (indexes.size < 3) {
      indexes.add(Math.floor(Math.random() * 12));
    }
    return Array.from(indexes).sort((a, b) => a - b);
  };

  useEffect(() => {
    const randoms = getRandomIndexes();
    setInputIndexes(randoms);
  }, []);

  const handleInputChange = (index: number, value: string) => {
    setUserInputs({ ...userInputs, [index]: value });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={''} icon={arrowBackOutline} color="dark" />
          </IonButtons>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Verify recovery phrase
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false} aria-hidden="true">
        <div className="flex flex-col gap-[50px] items-center justify-start pt-16 px-4">
          <div className="grid grid-cols-3 gap-4 w-full">
            {recoveryPhrase.map((word, index) =>
              inputIndexes.includes(index) ? (
                <>
                  <div
                    key={index}
                    className="flex items-center justify-between gap-1"
                  >
                    <span className="w-[20%] text-right">{index + 1}.</span>
                    <IonInput
                      key={index}
                      className="bg-[#BDE0FE] rounded-xl text-center py-2 w-[80%] h-10 min-h-10! text-md!"
                    />
                  </div>
                </>
              ) : (
                <div
                  key={index}
                  className="flex items-center justify-between gap-1"
                >
                  <span className="w-[20%] text-right">{index + 1}.</span>
                  <div className="bg-[#BDE0FE] rounded-xl text-center py-2 w-[80%]">
                    {word}
                  </div>
                </div>
              )
            )}
          </div>

          <IonButton
            className="w-full text-sm"
            onClick={() => history.push('/email/linked-check')}
          >
            Next
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default VerifyPhrase;
