import { useRef } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButton,
} from '@ionic/react'
import { MagnifyingGlass, Users, Plus } from '@phosphor-icons/react'
import ExploreContainer from '../components/ExploreContainer'
import SearchModal from '../components/SearchModal'
import Logo from '../assets/images/logo.svg'

const MainScreen: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null)

  const openModal = () => {
    modal.current?.present()
  }

  return (
    <IonPage>
      <IonHeader collapse="fade" className="bg-transparent !shadow-none">
        <IonToolbar>
          <div className="flex justify-between items-start px-[10px] py-[30px]">
            <IonButton
              id="search-modal"
              className="custom-ion-button"
              onClick={openModal}
            >
              <MagnifyingGlass weight="bold" size={22} color="#000" />
            </IonButton>

            <IonImg className="w-[100px]" src={Logo}></IonImg>

            <div className="flex flex-col space-y-1">
              <IonButton className="custom-ion-button">
                <Users weight="bold" size={22} color="#000" />
              </IonButton>
              <IonButton className="custom-ion-button">
                <Plus weight="bold" size={22} color="#000" />
              </IonButton>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>

      <SearchModal modalRef={modal} />
    </IonPage>
  )
}

export default MainScreen
