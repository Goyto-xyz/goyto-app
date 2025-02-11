import { useRef, useState } from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonButton,
  IonModal,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
} from '@ionic/react'
import { MagnifyingGlass, Users, Plus } from '@phosphor-icons/react'
import ExploreContainer from '../components/ExploreContainer'
import Logo from '../assets/images/logo.svg'
import './MainScreen.css'

const MainScreen: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null)
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null)

  return (
    <IonPage>
      <IonHeader collapse="fade" className="bg-transparent !shadow-none">
        <IonToolbar>
          <div className="flex justify-between items-start px-[10px] py-[30px]">
            <IonButton id="open-modal">
              <MagnifyingGlass weight="bold" size={28} color="#000" />
            </IonButton>

            <IonImg className="w-[100px]" src={Logo}></IonImg>

            <div className="flex flex-col space-y-1">
              <IonButton>
                <Users weight="bold" size={28} color="#000" />
              </IonButton>
              <IonButton>
                <Plus weight="bold" size={28} color="#000" />
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

      <IonModal
        ref={modal}
        trigger="open-modal"
        presentingElement={presentingElement!}
      >
        <IonContent className="ion-padding">
          <IonSearchbar
            onClick={() => modal.current?.setCurrentBreakpoint(0.75)}
            placeholder="Search"
          ></IonSearchbar>
          <IonList>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=b" />
              </IonAvatar>
              <IonLabel>
                <h2>Connor Smith</h2>
                <p>Sales Rep</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=a" />
              </IonAvatar>
              <IonLabel>
                <h2>Daniel Smith</h2>
                <p>Product Designer</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=d" />
              </IonAvatar>
              <IonLabel>
                <h2>Greg Smith</h2>
                <p>Director of Operations</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=e" />
              </IonAvatar>
              <IonLabel>
                <h2>Zoey Smith</h2>
                <p>CEO</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default MainScreen
