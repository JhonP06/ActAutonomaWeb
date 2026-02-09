import { Routes } from '@angular/router';
import { Home } from './futures/home/home';
import { Aticulos } from './shared/aticulos/aticulos';
import { Pag404 } from './shared/pag404/pag404';

export const routes: Routes = [
    {
        path:"", component:Home
    },
    {
        path:"articulos", component: Aticulos
    },


    //NOT PAG
    {
        path:"**", component:Pag404
    }
];
