import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DestPlacesComponent } from './dest-places/dest-places.component';
import { DestThemeComponent } from './dest-theme/dest-theme.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { HotelsResortsComponent } from './hotels-resorts/hotels-resorts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SummerComponent } from './seasons/summer/summer.component';
import { WinterComponent } from './seasons/winter/winter.component';
import { MansoonComponent } from './seasons/mansoon/mansoon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { XComponent } from './x/x.component';
import { APComponent } from './ap/ap.component';
import { ReadMoreLessComponent } from './read-more-less/read-more-less.component';
import { FontAwesomeModule ,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { KeralaComponent } from './kerala/kerala.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { TamilNaduComponent } from './tamil-nadu/tamil-nadu.component';
import { HoneymoonComponent } from './honeymoon/honeymoon.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { BeachComponent } from './beach/beach.component';
import { HillStationComponent } from './hill-station/hill-station.component';
import { PiligrimiageComponent } from './piligrimiage/piligrimiage.component';
import { HeritageComponent } from './heritage/heritage.component';
library.add(faAngleDown,faAngleRight);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DestPlacesComponent,
    DestThemeComponent,
    SeasonsComponent,
    HotelsResortsComponent,
    ContactUsComponent,
    SignUpComponent,
    SignInComponent,
    SummerComponent,
    WinterComponent,
    MansoonComponent,
    PageNotFoundComponent,
    FooterComponent,
    XComponent,
    APComponent,
    ReadMoreLessComponent,
    KeralaComponent,
    TelanganaComponent,
    KarnatakaComponent,
    TamilNaduComponent,
    HoneymoonComponent,
    WildlifeComponent,
    BeachComponent,
    HillStationComponent,
    PiligrimiageComponent,
    HeritageComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports:[],
  providers: [FontAwesomeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
