import { Routes, RouterModule } from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
    {
        path: 'users',
        component: UsersListComponent
    },
    {
        path: 'users/:id',
        component: UserProfileComponent
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    }
];

export const appRouterModule = RouterModule.forRoot(routes);