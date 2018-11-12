import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MAT_DATE_LOCALE
 } from '@angular/material';

@NgModule({
    declarations :[],
    imports : [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule
    ],
    exports : [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule
    ],
    providers : [
        {provide: MAT_DATE_LOCALE, useValue: 'es-AR'},  
    ]
})
export class MaterialModule {}