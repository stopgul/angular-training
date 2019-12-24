import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class DataService<T> {
  constructor(private url: string, private httpClient: HttpClient) {
    localStorage.setItem("token", "My64m_rDVhm2kscMQHPF-ce2pEIIETvYNOa5");
  }

  getAll(): Observable<T[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    };
    return this.httpClient.get<T[]>(this.url, httpOptions);
  }

  getAllSingle(): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    };
    return this.httpClient.get<T>(this.url, httpOptions);
  }

  get(id: number): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    };
    return this.httpClient.get<T>(`${this.url}/${id}`, httpOptions);
  }

  public create(item: T): Observable<T> {
    return this.httpClient.post<T>(this.url, JSON.stringify(item));
  }

  public update(item: T): Observable<T> {
    // return this.httpClient.put<T>(
    //   `${this.url}/${item.id}`,
    //   JSON.stringify(item)
    // );
    //.pipe(map(data => this.serializer.fromJson(data) as T));
    return;
  }

  // list(queryOptions: QueryOptions): Observable<T[]> {
  //   return this.httpClient
  //     .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
  //     .pipe(map((data: any) => this.convertData(data.items)));
  // }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
