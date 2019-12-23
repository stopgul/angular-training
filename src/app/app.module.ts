import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthorService } from "./services/author.service";
import { AuthorListComponent } from "./components/author-list/author-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { AlbumListComponent } from "./components/album-list/album-list.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "authors", pathMatch: "full" },
  { path: "authors", component: AuthorListComponent },
  { path: "albums", component: AlbumListComponent, canActivate: [AuthGuard] },
  { path: "page", component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    PageNotFoundComponent,
    AlbumListComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
