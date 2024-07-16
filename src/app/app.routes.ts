import { Routes } from '@angular/router';
import { MargaritaComponent } from './margarita/margarita.component';
import { TequilaComponent } from './tequila/tequila.component';
import { VodkaComponent } from './vodka/vodka.component';
import { WineComponent } from './wine/wine.component';

export const routes: Routes = [
    {
        path: '',
        component: MargaritaComponent
    },
    {
        path: 'margarita',
        component: MargaritaComponent
    },
    {
        path: 'tequila',
        component: TequilaComponent
    },
    {
        path: 'vodka',
        component: VodkaComponent
    },
    {
        path: 'wine',
        component: WineComponent
    }
];
