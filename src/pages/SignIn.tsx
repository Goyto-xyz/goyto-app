import { IonButton, IonInput, IonText } from '@ionic/react';
import { useState } from 'react';

const SignInScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col h-screen bg-white p-6 justify-center">
      <IonText className="text-xl font-bold text-center mb-6">Sign In</IonText>

      <IonButton expand="full" color="dark" className="mb-4">
        Connect Wallet
      </IonButton>

      <div className="flex items-center my-4">
        <div className="border-t flex-grow"></div>
        <IonText className="mx-2 text-gray-500">or</IonText>
        <div className="border-t flex-grow"></div>
      </div>

      <IonInput
        type="email"
        placeholder="Enter your email"
        value={email}
        onIonChange={e => setEmail(e.detail.value!)}
        className="border rounded-lg p-3 mb-4"
      />

      <IonButton expand="full" color="primary">
        Continue with Email
      </IonButton>
    </div>
  );
};

export default SignInScreen;
