import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  useIonRouter,
  IonContent
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { NavigationArrow, AddressBook } from '@phosphor-icons/react';
import LocationSVG from '@/assets/images/location.svg';
import { useState } from 'react';
import { Check } from '@phosphor-icons/react/dist/ssr';

function AllowAccess() {
  const router = useIonRouter();
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [contactsEnabled, setContactsEnabled] = useState(false);

  const handleEnableLocation = () => {
    // TODO: Implement location enabling logic
    setLocationEnabled(true);
  };

  const handleEnableContacts = () => {
    // TODO: Implement contacts enabling logic
    setContactsEnabled(true);
    router.push('/find-contacts');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={''} icon={arrowBackOutline} color="dark" />
          </IonButtons>
          <IonTitle className="text-center font-inter font-700 text-lg">
            Please allow access
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => router.push('/enable-notifications')}>
              Next
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="bg-[#A2D2FF]" scrollY={false}>
        <div className="flex flex-col gap-5 items-center justify-start pt-16 px-4">
          <img src={LocationSVG} alt="Location" className="w-[400px]" />

          <p className="text-lg text-center">
            Goyto needs access to your location to help you find friends nearby
          </p>

          <IonButton
            className="w-full"
            color={locationEnabled ? 'success' : ''}
            onClick={handleEnableLocation}
          >
            {locationEnabled ? (
              <Check size={30} weight="bold" />
            ) : (
              <NavigationArrow size={30} weight="bold" className="rotate-90" />
            )}
            <span className="ml-[10px]">Enable Location</span>
          </IonButton>

          <IonButton
            className="w-full"
            color={contactsEnabled ? 'success' : ''}
            onClick={handleEnableContacts}
          >
            {contactsEnabled ? (
              <Check size={30} weight="bold" />
            ) : (
              <AddressBook size={30} weight="bold" />
            )}
            <span className="ml-[10px]">Enable Contacts</span>
          </IonButton>

          <p className="mt-2 text-xs text-center">
            Goytoputs your privacy first. We won't share your location without
            your permission. We won't text or spam your contacts.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default AllowAccess;
