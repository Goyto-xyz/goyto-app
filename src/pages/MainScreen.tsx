import { useRef } from 'react'
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
  IonLabel,
} from '@ionic/react'
import { MagnifyingGlass, Users, Plus, Info } from '@phosphor-icons/react'
import ExploreContainer from '../components/ExploreContainer'
import Logo from '../assets/images/logo.svg'
import Point from '../assets/images/point.svg'
import './MainScreen.css'

const MainScreen: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null)

  return (
    <IonPage>
      <IonHeader collapse="fade" className="bg-transparent !shadow-none">
        <IonToolbar>
          <div className="flex justify-between items-start px-[10px] py-[30px]">
            <IonButton id="open-modal" className="custom-ion-button">
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

      <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.9}>
        <IonContent className="ion-padding">
          <IonSearchbar
            onClick={() => modal.current?.setCurrentBreakpoint(0.75)}
            placeholder="Search around here..."
          ></IonSearchbar>
          <IonList className="!pt-0">
            <IonItem className="pb-3">
              <p className="text-[#b2b2b2]">2 places nearby</p>
            </IonItem>
            <IonItem className="py-1">
              <IonLabel className="!flex justify-between items-center">
                <div>
                  <h2 className="!mb-2 !text-xl !font-semibold">
                    Canyon Station
                  </h2>
                  <p className="!text-lg text-[#b2b2b2] !mb-2">
                    Bangalore, Karnataka
                  </p>
                </div>
                <Info size={22} color="#b2b2b2" />
              </IonLabel>
            </IonItem>
            <IonItem className="py-1">
              <IonLabel className="!flex justify-between items-center">
                <div>
                  <h2 className="!mb-2 !text-xl !font-semibold">Café Aroma</h2>
                  <p className="!text-lg text-[#b2b2b2] !mb-2">
                    Park Glasswi, Cape Atrys
                  </p>
                </div>
                <Info size={22} color="#b2b2b2" />
              </IonLabel>
            </IonItem>
            <div className="flex justify-between items-center py-1 px-4">
              <p className="!text-sm !font-semibold">Add a new place</p>
              <IonButton
                style={{
                  '--background': '#89FC00',
                  '--background-hover': '#89FC00',
                  '--background-activated': '#68be00',
                  '--background-focused': '#68be00',
                  width: '100px',
                  height: '25px',
                  color: '#000',
                }}
                shape="round"
              >
                <p className="text-sm font-semibold">+20</p>&nbsp;
                <IonImg src={Point} className="w-[25px] h-[25px]"></IonImg>
              </IonButton>
            </div>
          </IonList>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default MainScreen
