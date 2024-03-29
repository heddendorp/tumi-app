import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationAutocompleteComponent } from './components/location-autocomplete/location-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './components/grid/grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectLocationDialogComponent } from './components/select-location-dialog/select-location-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IconToastComponent } from './components/icon-toast/icon-toast.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UtilMaterialModule } from '@tumi/util/material';
import { PhotoDetailsDialogComponent } from './components/photo-details-dialog/photo-details-dialog.component';
import { DataItemsManagerComponent } from './components/data-items-manager/data-items-manager.component';
import { NewDataItemDialogComponent } from './components/new-data-item-dialog/new-data-item-dialog.component';
import { DataItemsCollectorComponent } from './components/data-items-collector/data-items-collector.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    UtilMaterialModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    LocationAutocompleteComponent,
    GridComponent,
    SelectLocationDialogComponent,
    IconToastComponent,
    PhotoDetailsDialogComponent,
    DataItemsManagerComponent,
    NewDataItemDialogComponent,
    DataItemsCollectorComponent,
  ],
  exports: [
    LocationAutocompleteComponent,
    GridComponent,
    SelectLocationDialogComponent,
    IconToastComponent,
    DataItemsManagerComponent,
    DataItemsCollectorComponent,
  ],
})
export class UtilComponentsModule {}
