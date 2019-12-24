import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthorService } from "./services/author.service";
import { AuthorListComponent } from "./components/author-list/author-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AlbumListComponent } from "./components/album-list/album-list.component";
import { AuthGuard } from "./services/auth-guard.service";
import { AlbumDetailComponent } from "./components/album-detail/album-detail.component";
import { FormsModule } from "@angular/forms";
import { HttpTokenInterceptor } from "./interceptors/http-token-interceptor";

const routes: Routes = [
  { path: "", redirectTo: "authors", pathMatch: "full" },
  { path: "authors", component: AuthorListComponent },
  { path: "albums", component: AlbumListComponent, canActivate: [AuthGuard] },
  {
    path: "album/:id",
    component: AlbumDetailComponent,
    canActivate: [AuthGuard]
  },
  { path: "page", component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    AuthorListComponent,
    PageNotFoundComponent,
    AlbumListComponent,
    AlbumDetailComponent
  ],

  providers: [
    AuthorService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
