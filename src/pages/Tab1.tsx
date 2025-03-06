import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { pencilOutline, addOutline, checkmarkOutline } from 'ionicons/icons';
import './Tab1.css';

interface Message {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  status: 'read' | 'unread' | 'delivered' | 'waiting';
  avatarColor: string;
}

const messages: Message[] = [
  { id: 1, name: 'Mike', lastMessage: 'Last message...', time: '00:42', status: 'read', avatarColor: 'bg-cyan-200' },
  { id: 2, name: 'Jessica', lastMessage: 'Last message...', time: '21:42', status: 'read', avatarColor: 'bg-cyan-200' },
  { id: 3, name: 'Luis', lastMessage: 'Last message...', time: '8:54', status: 'waiting', avatarColor: 'bg-orange-200' },
  { id: 4, name: 'John', lastMessage: 'Last message...', time: '13:00', status: 'read', avatarColor: 'bg-green-200' },
  { id: 5, name: 'Drake', lastMessage: 'Last message...', time: 'Yesterday', status: 'read', avatarColor: 'bg-cyan-200' },
  { id: 6, name: 'Micaela', lastMessage: 'Last message...', time: 'Tuesday', status: 'waiting',  avatarColor: 'bg-pink-200' },
  { id: 7, name: 'Danny', lastMessage: 'Last message...', time: 'Tuesday', status: 'read', avatarColor: 'bg-yellow-200' },
  { id: 8, name: 'Emilly', lastMessage: 'Last message...', time: '15 Feb', status: 'read', avatarColor: 'bg-purple-200' },
  { id: 9, name: 'Keyla', lastMessage: 'Last message...', time: '13 Feb', status: 'delivered', avatarColor: 'bg-green-200' },
  { id: 10, name: 'Claire', lastMessage: 'Last message...', time: '10 Feb', status: 'read', avatarColor: 'bg-cyan-200' },
  { id: 11, name: 'Joe', lastMessage: 'Last message...', time: '1 Feb', status: 'waiting', avatarColor: 'bg-pink-200' },
];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <div className="messages-header">
            <h1>Messages</h1>
            <div className="header-icons">
              <IonIcon icon={pencilOutline} />
              <IonIcon icon={addOutline} />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>


      
      <IonContent>
      <div className='message-container'>
        <div>
          <IonSearchbar
            placeholder="Search Contact"
            className="messages-searchbar"
          />
        </div>
        <IonList className="messages-list">
          {messages.map((message) => (
            <IonItem key={message.id} className="message-item">
              <IonAvatar slot="start" className="message-avatar">
                <div className={`avatar-placeholder ${message.avatarColor}`}>
                  {message.name.charAt(0)}
                </div>
              </IonAvatar>
              <IonLabel>
                <h2>{message.name}</h2>
                <p>{message.lastMessage}</p>
              </IonLabel>
              <div className="message-meta">
                <span className="message-time">{message.time}</span>
                {message.status === 'read' && (
                  <IonIcon icon={checkmarkOutline} className="status-icon read" />
                )}
                {message.status === 'waiting' && (
                  <div className="status-icon waiting"></div>
                )}
                {message.status === 'delivered' && (
                  <IonIcon icon={checkmarkOutline} className="status-icon delivered" />
                )}
              </div>
            </IonItem>
          ))}
        </IonList>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;