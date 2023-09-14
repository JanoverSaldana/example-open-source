import { NgModule } from "@angular/core";

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

//import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatTableModule],
    exports: [ MatIconModule, MatButtonModule, MatToolbarModule, MatTableModule ]

})

export class MaterialModule { }