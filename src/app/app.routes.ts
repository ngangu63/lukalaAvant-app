import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ROIComponent } from './roi/roi.component';
import { StatusComponent } from './status/status.component';
import { ContactComponent } from './contact/contact.component';
import { FinanceComponent } from './finance/finance.component';
import { LesDirigeantsComponent } from './les-dirigeants/les-dirigeants.component';
import { OthersMembersComponent } from './others-members/others-members.component';
import { DeclIntentionComponent } from './decl-intention/decl-intention.component';
import { Mp3PlayerComponent } from './mp3-player/mp3-player.component';
import { ViabiliteComponent } from './viabilite/viabilite.component';
import { FonctionnementComponent } from './fonctionnement/fonctionnement.component';
import { ActOfNotaryComponent } from './act-of-notary/act-of-notary.component';
import { VueEnPlanComponent } from './vue-en-plan/vue-en-plan.component';
import { FicheDeProjectComponent } from './fiche-de-project/fiche-de-project.component';
import { PlanStrategiqueComponent } from './plan-strategique/plan-strategique.component';
import { authGuard } from './auth/auth.guard';





export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Accueil', component: HomeComponent },
  { path: 'LesDirigeants', component: LesDirigeantsComponent },
  { path: 'TousLesMembres', component: OthersMembersComponent },
  { path: 'Contact', component: ContactComponent },
  /*   { path: 'Finance', component: FinanceComponent }, */
  { path: 'Finance', component: FinanceComponent, canActivate: [authGuard] },
  { path: 'Nécrologie', component: Mp3PlayerComponent },
  { path: 'Ndaya/:videoId', component: YoutubeComponent },
  { path: 'Mukungu/:videoId', component: YoutubeComponent },
  { path: 'PesaPosition/:videoId', component: YoutubeComponent },
  { path: 'BonSamaritain/:videoId', component: YoutubeComponent },
  { path: 'Monzo/:videoId', component: YoutubeComponent },
  { path: 'JamaisKolonga/:videoId', component: YoutubeComponent },
  { path: 'KaribouYaBintou/:videoId', component: YoutubeComponent },
  { path: 'Ngobila/:videoId', component: YoutubeComponent },
  { path: 'Jesus3/:videoId', component: YoutubeComponent },
  { path: 'Kelya/:videoId', component: YoutubeComponent },
  { path: 'Mikolo/:videoId', component: YoutubeComponent },
  { path: 'BonbonSucré/:videoId', component: YoutubeComponent },
  { path: 'NzotoMoko/:videoId', component: YoutubeComponent },
  { path: 'ZéroFaute/:videoId', component: YoutubeComponent },
  { path: 'PointFinal/:videoId', component: YoutubeComponent },
  { path: 'Coucou/:videoId', component: YoutubeComponent },
  { path: 'EbaleYaZaire/:videoId', component: YoutubeComponent },
  { path: 'Maya/:videoId', component: YoutubeComponent },
  { path: 'MayaVersion2/:videoId', component: YoutubeComponent },
  { path: 'Ngungi/:videoId', component: YoutubeComponent },
  { path: 'Djino/:videoId', component: YoutubeComponent },
  /*   { path: 'Noël/:videoId', component: YoutubeComponent },
    { path: 'HolyNight/:videoId', component: YoutubeComponent },
    { path: 'FelizNavidad/:videoId', component: YoutubeComponent }, 
    { path: 'SantaClause/:videoId', component: YoutubeComponent },  
    { path: 'Angels/:videoId', component: YoutubeComponent }, 
    { path: 'SilentNight/:videoId', component: YoutubeComponent }, 
    { path: 'CarelessWhisper/:videoId', component: YoutubeComponent },
    { path: 'whenIseeYouAngain/:videoId', component: YoutubeComponent },
    { path: 'LastChristmas/:videoId', component: YoutubeComponent }, */
  { path: 'Nzale/:videoId', component: YoutubeComponent },
  { path: 'Longo/:videoId', component: YoutubeComponent },
  { path: 'LembaLemba/:videoId', component: YoutubeComponent },
  { path: 'AdiosTete/:videoId', component: YoutubeComponent },
  { path: 'Constantation/:videoId', component: YoutubeComponent },
  { path: 'Mabele/:videoId', component: YoutubeComponent },
  { path: 'Matoba/:videoId', component: YoutubeComponent },
  { path: 'Souvenir3/:videoId', component: YoutubeComponent },
  { path: 'FauteYaCommerçant/:videoId', component: YoutubeComponent },
  { path: 'Deliya/:videoId', component: YoutubeComponent },
  { path: 'Messages', component: MessagesComponent },
  { path: 'ROI', component: ROIComponent },
  { path: 'Status', component: StatusComponent },
  { path: 'Intention', component: DeclIntentionComponent },
  { path: 'Viabilite', component: ViabiliteComponent },
  { path: 'Fonctionnement', component: FonctionnementComponent },
  { path: 'Notarie', component: ActOfNotaryComponent },
  { path: 'vueEnPlan', component: VueEnPlanComponent },
  { path: 'FicheDeProject1', component: FicheDeProjectComponent },
  { path: 'PlanStrategique', component: PlanStrategiqueComponent },
  { path: 'morgue', component: VueEnPlanComponent },


  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],


})
export class AppRoutingModule { }
