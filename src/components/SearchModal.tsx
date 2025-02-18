import {
  IonContent,
  IonImg,
  IonButton,
  IonModal,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react'
import { Info } from '@phosphor-icons/react'
import Point from '../assets/images/point.svg'

interface SearchModalProps {
  modalRef: React.RefObject<HTMLIonModalElement>
}

const SearchModal: React.FC<SearchModalProps> = ({ modalRef }) => {
  return (
    <IonModal ref={modalRef} initialBreakpoint={0.9}>
      <IonContent className="ion-padding">
        <IonSearchbar
          onClick={() => modalRef.current?.setCurrentBreakpoint(0.75)}
          placeholder="Search around here..."
        ></IonSearchbar>
        <IonList className="!-ml-4">
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
          <div className="flex justify-between items-center py-1 pl-4">
            <p className="!text-sm !font-semibold">Add a new place</p>
            <IonButton
              style={{
                '--background': '#89FC00',
                '--background-hover': '#89FC00',
                '--background-activated': '#68be00',
                '--background-focused': '#68be00',
                width: '100px',
                height: '35px',
              }}
              shape="round"
              size="small"
            >
              <div className="flex justify-between items-center gap-2">
                <p className="text-sm font-semibold text-black">+20</p>
                <IonImg src={Point} className="w-[25px] h-[25px]"></IonImg>
              </div>
            </IonButton>
          </div>
        </IonList>
      </IonContent>
    </IonModal>
  )
}

export default SearchModal
