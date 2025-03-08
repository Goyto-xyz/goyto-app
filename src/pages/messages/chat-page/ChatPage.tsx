"use client"
import type React from "react"
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonFooter,
  IonInput,
  IonAvatar,
  setupIonicReact,
} from "@ionic/react"
import { ellipsisVertical, sendOutline, attachOutline, happyOutline } from "ionicons/icons"
import { useEffect, useRef, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import type { Contact } from "../MessagesPage"
import "./ChatPage.css"

if (typeof window !== "undefined") {
  setupIonicReact()
}

interface Message {
  id: number
  text: string
  sent: boolean
  time: string
  status?: "sent" | "delivered" | "read"
}

// Mock contacts data - in a real app, this would come from a database or API
const contactsData: Contact[] = [
  {
    id: 1,
    name: "Claire",
    time: "21:42",
    read: false,
    numUnread: 1,
    lastMessage: "Perfect! See you then.",
    status: "Online",
  },
  { id: 2, name: "Jessica", time: "21:42", read: false, numUnread: 0, status: "Offline" },
  { id: 3, name: "Luis", time: "9:54", read: false, numUnread: 0, status: "Last seen 2h ago" },
  { id: 4, name: "John", time: "13:00", read: true, numUnread: 3, status: "Online" },
]

// Mock messages data for each contact
const messagesData: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      text: "Hello Claire, nice to meet you!",
      sent: true,
      time: "10:30 AM",
    },
    {
      id: 2,
      text: "Hi! Nice to meet you too. How's your day going?",
      sent: false,
      time: "10:32 AM",
    },
    {
      id: 3,
      text: "Pretty good! Just working on a project. What about you?",
      sent: true,
      time: "10:34 AM",
    },
  ],
  2: [
    {
      id: 1,
      text: "Hey Jessica, did you get my email?",
      sent: true,
      time: "9:15 AM",
    },
    {
      id: 2,
      text: "Yes, I'll review it today and get back to you.",
      sent: false,
      time: "9:20 AM",
    },
  ],
  3: [
    {
      id: 1,
      text: "Luis, are we still on for the meeting tomorrow?",
      sent: true,
      time: "Yesterday",
    },
    {
      id: 2,
      text: "I've prepared all the materials.",
      sent: false,
      time: "Yesterday",
    },
  ],
  4: [
    {
      id: 1,
      text: "John, can you send me the latest report?",
      sent: true,
      time: "Monday",
    },
    {
      id: 2,
      text: "Sure thing, I'll email it to you right away.",
      sent: false,
      time: "Monday",
    },
    {
      id: 3,
      text: "Thanks! I appreciate it.",
      sent: true,
      time: "Monday",
    },
  ],
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

const MessageBubble = ({ message }: { message: Message }) => {
  return (
    <div className={`message-bubble ${message.sent ? "sent" : "received"}`}>
      <div className="message-content">
        <p>{message.text}</p>
        <div className="message-info">
          <span className="message-time">{message.time}</span>
          {message.sent && message.status && <span className="message-status">{message.status}</span>}
        </div>
      </div>
    </div>
  )
}

export default function ChatPage() {
  const { id } = useParams<{ id: string }>()
  const contactId = Number.parseInt(id)
  const history = useHistory()

  const [contact, setContact] = useState<Contact | undefined>()
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const contentRef = useRef<HTMLIonContentElement>(null)


  useEffect(() => {

    const foundContact = contactsData.find((c) => c.id === contactId)
    setContact(foundContact)


    if (contactId && messagesData[contactId]) {
      setMessages(messagesData[contactId])
    }


    if (contactId === 1) {
      setIsTyping(true)
    }
  }, [contactId])

  const sendMessage = () => {
    if (newMessage.trim() === "") return

    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`

    const newMsg: Message = {
      id: messages.length + 1,
      text: newMessage,
      sent: true,
      time: timeString,
      status: "sent",
    }

    setMessages([...messages, newMsg])
    setNewMessage("")


    if (contactId === 1) {
      setIsTyping(true)

    
      setTimeout(() => {
        const responseMsg: Message = {
          id: messages.length + 2,
          text: "I'm doing well too! Let me know when you finish that project.",
          sent: false,
          time: `${formattedHours}:${Number.parseInt(formattedMinutes) + 2} ${ampm}`,
        }

        setMessages((prev) => [...prev, responseMsg])
        setIsTyping(false)
      }, 2000)
    }
  }

  useEffect(() => {

    if (contentRef.current) {
      contentRef.current.scrollToBottom(300)
    }
  }, [messages])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }


  if (!contact) {
    return (
      <IonPage>
        <IonContent>
          <div className="flex items-center justify-center h-full">
            <p>Contact not found. Redirecting...</p>
          </div>
        </IonContent>
      </IonPage>
    )
  }

  return (
    <IonPage>
      <div className="chat-container">
        <IonHeader className="ion-no-border">
          <IonToolbar className="chat-toolbar">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/messages" text="" />
            </IonButtons>
            <div className="chat-contact-info">
              <IonAvatar className="chat-avatar">
                <div className="avatar-circle" style={{ backgroundColor: "#C7CEEA" }}>
                  <span className="avatar-initial">{contact.name.charAt(0)}</span>
                </div>
              </IonAvatar>
              <div className="contact-details">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-status">{contact.status || "Offline"}</div>
              </div>
            </div>
            <IonButtons slot="end">
              <button className="icon-button">
                <IonIcon icon={ellipsisVertical} />
              </button>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent ref={contentRef} className="chat-content">
          <div className="messages-container">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
       
            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
        </IonContent>
        <IonFooter className="chat-footer ion-no-border">
          <div className="input-container">
            <button className="emoji-button">
              <IonIcon icon={happyOutline} />
            </button>
            <IonInput
              placeholder="New Message..."
              value={newMessage}
              onIonInput={(e) => setNewMessage(e.detail.value || "")}
              onKeyDown={handleKeyDown}
              className="message-input"
            />
            <button
              className={`send-button ${newMessage.trim() ? "active" : ""}`}
              onClick={sendMessage}
              disabled={newMessage.trim() === ""}
            >
              <IonIcon icon={sendOutline} />
            </button>
            <button className="attachment-button">
              <IonIcon icon={attachOutline} />
            </button>
          </div>
        </IonFooter>
      </div>
    </IonPage>
  )
}

