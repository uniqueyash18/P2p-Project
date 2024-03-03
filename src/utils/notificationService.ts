import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import {PermissionsAndroid, Platform} from 'react-native';

export async function requestUserPermission(callback: (error: boolean) => void = () => {}): Promise<void> {
    try {
      if (Platform.OS === 'ios') {
        await messaging().registerDeviceForRemoteMessages();
      }
      if (Platform.Version >= "33") {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: 'Notification Permission',
            message: 'Allow this app to post notifications?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
  
        if (permission !== null && permission === PermissionsAndroid.RESULTS.GRANTED) {
          await getFcmToken();
          callback(false);
        } else {
          callback(true);
        }
      } else {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
        if (enabled) {
          await getFcmToken();
          callback(false);
        } else {
          callback(true);
        }
      }
    } catch (error) {
      console.error(error);
      callback(true);
    }
  }

const getFcmToken = async (): Promise<void> => {
  const newFcmToken = await messaging().getToken();
  console.log(newFcmToken, 'the new generated token');
};

export const notificationListener = async (): Promise<void> => {
    // Background
    messaging().onNotificationOpenedApp((remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
    });
  
    // Kill or inactive
    const initialNotification = await messaging().getInitialNotification();
  
  };
  