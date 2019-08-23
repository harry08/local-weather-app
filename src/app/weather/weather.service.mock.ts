import { IWeatherService } from "./weather.service";
import { ICurrentWeather } from "../interfaces";
import { Observable, of } from "rxjs";

export class WeatherServiceMock implements IWeatherService {
    private mockWeather : ICurrentWeather = {
        city: 'Bursa',
        country: 'TR',
        date: 1485789600,
        image: '',
        temperature: 280.32,
        description: 'light intensity drizzle',
    }

    public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
        // Turn the object into an Observable with of(...)
        return of(this.mockWeather);
    } 
}