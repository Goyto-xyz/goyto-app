import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter
} from '@ionic/react';
import User1PNG from '@/assets/images/user1.png';
import User2PNG from '@/assets/images/user2.png';

function FindMyFriends() {
  const router = useIonRouter();

  const contacts = [
    {
      name: 'Dragoslav',
      numOfContacts: 2,
      avatar: User1PNG
    },
    {
      name: 'Dragona',
      numOfContacts: 4,
      avatar: User2PNG
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Find my friends
          </IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() => router.push('/enable-notifications')}
              color="tertiary"
              fill="solid"
            >
              DONE
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <div className="flex flex-col items-start justify-start pt-8 px-4">
          <p className="uppercase w-full font-bold text-sm pb-3 border-solid border-b-1 border-[rgba(0,48,73,0.3)]">
            Your contacts
          </p>

          <ul className="flex flex-col items-start justify-start w-full">
            {contacts.map((contact, index) => (
              <li
                key={index}
                className="w-full flex items-center justify-between py-4 border-solid border-b-1 border-[rgba(0,48,73,0.3)]"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-[50px] h-[50px] rounded-xl"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">{contact.name}</p>
                    <p className="text-xs text-[#669BBC]">
                      knows {contact.numOfContacts} people on Goyoto
                    </p>
                  </div>
                </div>

                <IonButton size="small">Invite</IonButton>
              </li>
            ))}
          </ul>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default FindMyFriends;
