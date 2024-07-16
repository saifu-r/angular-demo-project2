import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  public alertButtons = ['Submit'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() { }


  async showAlert() {
    // let alert: any = this.alertController.create({
    //   message: 'This is an alert with custom aria attributes.',
    //   htmlAttributes: {
    //     'aria-label': 'alert dialog',
    //   },
    // });

    // const alert = await this.alertController.create({
    //   buttons: ['Submit'],
    //   inputs: [
    //     {
    //       placeholder: 'Name',
    //     },
    //     {
    //       placeholder: 'Nickname (max 8 characters)',
    //       attributes: {
    //         maxlength: 8,
    //       },
    //     },
    //     {
    //       type: 'number',
    //       placeholder: 'Age',
    //       min: 1,
    //       max: 100,
    //     },
    //     {
    //       type: 'textarea',
    //       placeholder: 'A little about yourself',
    //     },
    //   ]
    // });

  }

  async presentAlert() {
    const alert = await this.alertController.create({

      buttons: ['CONFIRM'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ]
    });
    await alert.present();
    const { data } = await alert.onWillDismiss();
    console.log(data);
  }


  test(){
    console.log();
  }
}
