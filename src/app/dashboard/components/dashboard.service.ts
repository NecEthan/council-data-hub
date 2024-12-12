import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root' 
})
export class ScrapedService {

    constructor(private http: HttpClient) {}

    baseApi = 'https://council-data-hub-backend-production.up.railway.app'

    public getScrapedData() {
        return this.http.get<any>(`${this.baseApi}/scrape/all`)
    }

    public getScrapedDataByName(name: string) {
        return this.http.get<any>(`${this.baseApi}/scrape/${name}`)
    }
}