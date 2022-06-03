import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { APComponent } from './ap/ap.component';
import { BeachComponent } from './beach/beach.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DestPlacesComponent } from './dest-places/dest-places.component';
import { DestThemeComponent } from './dest-theme/dest-theme.component';
import { HeritageComponent } from './heritage/heritage.component';
import { HillStationComponent } from './hill-station/hill-station.component';
import { HomeComponent } from './home/home.component';
import { HoneymoonComponent } from './honeymoon/honeymoon.component';
import { HotelsResortsComponent } from './hotels-resorts/hotels-resorts.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { KeralaComponent } from './kerala/kerala.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PiligrimiageComponent } from './piligrimiage/piligrimiage.component';
import { MansoonComponent } from './seasons/mansoon/mansoon.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SummerComponent } from './seasons/summer/summer.component';
import { WinterComponent } from './seasons/winter/winter.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TamilNaduComponent } from './tamil-nadu/tamil-nadu.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { XComponent } from './x/x.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'About_us',component:AboutUsComponent},
  {path:'Destination_Places',component:DestPlacesComponent},
  {path:'Destination_Theme',component:DestThemeComponent},
  {path:'Season',component:SeasonsComponent,children:[
    {path:'summer',component:SummerComponent},
    {path:'winter',component:WinterComponent},
    {path:'mansoon',component:MansoonComponent},
  ]},
  {path:'Hotels_Resorts',component:HotelsResortsComponent},
  {path:'Contact_us',component:ContactUsComponent},
  {path:'Sign_in',component:SignInComponent},
  {path:'Enquire_Now',component:SignUpComponent},
  {path:'goa', component:XComponent},
  {path:'Andhra_pradesh',component:APComponent},
  {path:'kerala',component:KeralaComponent},
  {path:'telangana',component:TelanganaComponent},
  {path:'karnataka',component:KarnatakaComponent},
  {path:'tamil_nadu',component:TamilNaduComponent},
  {path:'honeymoon',component:HoneymoonComponent},
  {path:'wildlife',component:WildlifeComponent},
  {path:'heritage',component:HeritageComponent},
  {path:'beach',component:BeachComponent},
  {path:'piligrimiage',component:PiligrimiageComponent},
  {path:'hill_station',component:HillStationComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
