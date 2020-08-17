import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatDialogModule,
  MatTreeModule,
  MatTableModule,
  MatMenuModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTooltipModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatSortModule,
  MatPaginatorModule,
  MatRadioModule,
  MatAutocompleteModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
const MY_DATE_FORMATS = {
  parse: {
    dateInput: { month: "short", year: "numeric", day: "numeric" }
  },
  display: {
    dateInput: "input",
    monthYearLabel: { year: "numeric", month: "short" },
    dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
    monthYearA11yLabel: { year: "numeric", month: "long" }
  }
};

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatTreeModule,
    MatTableModule,
    MatMenuModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatTreeModule,
    MatTableModule,
    MatMenuModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule,
    MatRadioModule,
    MatAutocompleteModule
  ],
  providers: [
  ]
})
export class MaterialModule {
}
