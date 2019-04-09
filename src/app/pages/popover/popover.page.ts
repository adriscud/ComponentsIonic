import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {
  }

  async mostrarPop( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    //Es pot fer a onwilldismiss per anar més ràpid

    console.log('Padre: ', data);
  }

}
