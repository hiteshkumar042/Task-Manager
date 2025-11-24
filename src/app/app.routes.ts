import { Routes } from '@angular/router';
import { settingGuard } from './guards/setting-guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/todo-list-component/todo-list-component').then(m => m.TodoListComponent) },
    { path: 'add', loadComponent: () => import('./components/add-todo-component/add-todo-component').then(m => m.AddTodoComponent) },
    { path: 'edit/:id', loadComponent: () => import('./components/edit-todo-component/edit-todo-component').then(m => m.EditTodoComponent) },
    { path: 'infscroll', loadComponent: () => import('./components/infinite-scroll/infinite-scroll').then(m => m.InfiniteScroll) },
    { path: 'setting', loadComponent: () => import('./components/setting/setting').then(m => m.Setting), canActivate: [settingGuard] },
    { path: '**', loadComponent: () => import('./components/pagenotfound/pagenotfound').then(m => m.Pagenotfound) }
];
