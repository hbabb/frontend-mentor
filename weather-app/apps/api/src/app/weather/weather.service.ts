import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  getData(): { message: string } {
    return { message: 'Weather Service API' };
  }
}
