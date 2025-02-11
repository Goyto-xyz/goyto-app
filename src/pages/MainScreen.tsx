import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonTabButton,
} from '@ionic/react'
import { MagnifyingGlass, Users, Plus } from '@phosphor-icons/react'
import ExploreContainer from '../components/ExploreContainer'
import HeaderIconWrapper from '../components/HeaderIconWrapper'
import Logo from '../assets/images/logo.svg'
import './Tab2.css'

const MainScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="fade" className="bg-transparent !shadow-none">
        <IonToolbar>
          <div className="flex justify-between items-start px-[10px] py-[30px]">
            <div className="flex justify-center items-center">
              <IonTabButton>
                <HeaderIconWrapper>
                  <MagnifyingGlass weight="bold" size={28} color="#000" />
                </HeaderIconWrapper>
              </IonTabButton>
            </div>

            <IonImg className="w-[100px]" src={Logo}></IonImg>

            <div className="flex flex-col space-y-1">
              <IonTabButton>
                <HeaderIconWrapper className="!rounded-b-[6px]">
                  <Users weight="bold" size={28} color="#000" />
                </HeaderIconWrapper>
              </IonTabButton>
              <IonTabButton>
                <HeaderIconWrapper className="!rounded-t-[6px]">
                  <Plus weight="bold" size={28} color="#000" />
                </HeaderIconWrapper>
              </IonTabButton>
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
    </IonPage>
  )
}

export default MainScreen
