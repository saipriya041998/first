import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appconstant } from './app.constant';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
dispaly = appconstant.api + 'GetArticles?getall=0&categ=';
  constructor(private http: HttpClient) { }

getallarticles() {
  return this.http.get(this.dispaly);
}

}
