import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environmentProd } from "../../../enironments/enironment.prod";


@Injectable({
    providedIn: 'root' 
})
export class ScrapedService{
    public baseApi = environmentProd.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getScrapedData() {
        return this.http.get<any>(`${this.baseApi}/scrape/all`)
    }

    public getScrapedDataByName(name: string) {
        return this.http.get<any>(`${this.baseApi}/scrape/${name}`)
    }
}