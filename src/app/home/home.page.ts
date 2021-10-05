import { Component } from '@angular/core';
import { LocalNotifications,ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor( private localNotifications: LocalNotifications) {}

  notification( minutes: number){
    console.log('Notificación cargado', minutes);
    this.localNotifications.schedule({
      title: `TíTULO DE LA NOTIFICACIÓN`,
      text: 'Hola, este es el texto de la notificación  ',
      trigger: {
        in: minutes,
        unit: ELocalNotificationTriggerUnit.MINUTE,
        count: 5,
      },
      foreground: true
    });
  }

}
