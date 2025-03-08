"use client"
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonBadge,
  IonIcon,
  setupIonicReact,
} from "@ionic/react"
import { pencil, addOutline, checkmarkOutline } from "ionicons/icons"
import { useHistory } from "react-router-dom"
import "./Home.css"

if (typeof window !== "undefined") {
  setupIonicReact()
}

export interface Contact {
  id: number
  name: string
  time: string
  read: boolean
  numUnread: number
  lastMessage?: string
  avatar?: string
  status?: string
}

const getRandomColor = () => {
  const colors = [
    "#FF9AA2",
    "#FFB7B2",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
    "#C7CEEA",
    "#F8C8DC",
    "#D4A5A5",
    "#9FC5E8",
    "#B4A7D6",
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const MessageItem = ({ contact, onClick }: { contact: Contact; onClick: () => void }) => {
  return (
    <IonItem className="message-item" lines="full" onClick={onClick} button>
      <IonAvatar slot="start" className="message-avatar">
        <div className="avatar-circle" style={{ backgroundColor: getRandomColor() }}>
          {contact.numUnread > 0 && <IonBadge color="danger" className="unread-badge"></IonBadge>}
        </div>
      </IonAvatar>
      <IonLabel>
        <h2 className="message-title">{contact.name}</h2>
        <p className="last-message">{contact.lastMessage || "Last message..."}</p>
      </IonLabel>
      <div className="message-meta">
        <div className="message-time">{contact.time}</div>
        {contact.numUnread > 0 ? (
          <div className="unread-dot">{contact.numUnread}</div>
        ) : (
          <IonIcon icon={checkmarkOutline} className="read-icon" />
        )}
      </div>
    </IonItem>
  )
}

export default function MessagesPage() {
  const history = useHistory()

  const messages: Contact[] = [
    {
      id: 1,
      name: "Claire",
      time: "21:42",
      read: false,
      numUnread: 1,
      lastMessage: "Perfect! See you then.",
      status: "Online",
    },
    { id: 2, name: "Jessica", time: "21:42", read: false, numUnread: 0 },
    { id: 3, name: "Luis", time: "9:54", read: false, numUnread: 0 },
    { id: 4, name: "John", time: "13:00", read: true, numUnread: 3 },
    { id: 5, name: "Drake", time: "Yesterday", read: false, numUnread: 0 },
    { id: 6, name: "Micaela", time: "Tuesday", read: false, numUnread: 0 },
    { id: 7, name: "Danny", time: "Tuesday", read: true, numUnread: 3 },
    { id: 8, name: "Emilly", time: "15 Feb", read: false, numUnread: 0 },
    { id: 9, name: "Kayla", time: "13 Feb", read: false, numUnread: 0 },
    { id: 10, name: "Claire", time: "10 Feb", read: true, numUnread: 3 },
    { id: 11, name: "Joe", time: "1 Feb", read: false, numUnread: 3 },
  ]

  const navigateToChat = (contactId: number) => {
    history.push(`/chat-page/${contactId}`)
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="messages-toolbar">
          <IonTitle className="messages-title">Messages</IonTitle>
          <div className="toolbar-buttons" slot="end">
            <button className="icon-button edit-button">
              <IonIcon icon={pencil} />
            </button>
            <button className="icon-button add-button">
              <IonIcon icon={addOutline} />
            </button>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="messages-list">
          <div className="search-container">
            <IonSearchbar placeholder="Search Contact" className="messages-searchbar" />
          </div>
          <IonList>
            {messages.map((contact) => (
              <MessageItem key={contact.id} contact={contact} onClick={() => navigateToChat(contact.id)} />
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  )
}

