import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getCurrentWeather(
    @Query('latitude') latitude: string,
    @Query('longitude') longitude: string
  ) {
    if (!latitude || !longitude) {
      throw new BadRequestException('Latitude and longitude are required');
    }

    // Convert strings to numbers and validate
    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lon)) {
      throw new BadRequestException('Invalid latitude or longitude values');
    }

    if (lat < -90 || lat > 90) {
      throw new BadRequestException('Latitude must be between -90 and 90');
    }

    if (lon < -180 || lon > 180) {
      throw new BadRequestException('longitude must be between -180 and 180');
    }

    return this.weatherService.getCurrentWeather(lat, lon);
  }
}
