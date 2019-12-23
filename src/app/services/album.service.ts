import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";
import { AlbumResult } from "../models/album";

@Injectable({
  providedIn: "root"
})
export class AlbumService extends DataService<AlbumResult> {
  constructor(httpClient: HttpClient) {
    super("https://gorest.co.in/public-api/albums", httpClient);
  }
}
