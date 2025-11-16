import { Injectable } from '@nestjs/common';
import { fetchWeatherApi } from 'openmeteo';

@Injectable()
export class WeatherService {
  async getCurrentWeather(latitude: number, longitude: number) {
    const params = {
      latitude,
      longitude,
      hourly: [
        'temperature_2m',
        'relative_humidity_2m',
        'precipitation_probability',
        'precipitation',
        'wind_speed_10m',
        'wind_direction_10m',
        'wind_gusts_10m',
        'sunshine_duration',
      ],
      current: [
        'temperature_2m',
        'relative_humidity_2m',
        'apparent_temperature',
        'precipitation',
        'weather_code',
        'surface_pressure',
        'wind_speed_10m',
        'wind_direction_10m',
        'wind_gusts_10m',
      ],
      timezone: 'America/New_York',
      past_days: 2,
      wind_speed_unit: 'mph',
      temperature_unit: 'fahrenheit',
      precipitation_unit: 'inch',
    };

    const url = 'https://api.open-meteo.com/v1/forecast';
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];

    // Get timezone info
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const current = response.current()!;
    const hourly = response.hourly()!;

    // Build weather data object
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature_2m: current.variables(0)!.value(),
        relative_humidity_2m: current.variables(1)!.value(),
        apparent_temperature: current.variables(2)!.value(),
        precipitation: current.variables(3)!.value(),
        weather_code: current.variables(4)!.value(),
        surface_pressure: current.variables(5)!.value(),
        wind_speed_10m: current.variables(6)!.value(),
        wind_direction_10m: current.variables(7)!.value(),
        wind_gusts_10m: current.variables(8)!.value(),
      },
      hourly: {
        time: Array.from(
          {
            length:
              (Number(hourly.timeEnd()) - Number(hourly.time())) /
              hourly.interval(),
          },
          (_, i) =>
            new Date(
              (Number(hourly.time()) +
                i * hourly.interval() +
                utcOffsetSeconds) *
                1000
            )
        ),
        temperature_2m: hourly.variables(0)!.valuesArray(),
        relative_humidity_2m: hourly.variables(1)!.valuesArray(),
        precipitation_probability: hourly.variables(2)!.valuesArray(),
        precipitation: hourly.variables(3)!.valuesArray(),
        wind_speed_10m: hourly.variables(4)!.valuesArray(),
        wind_direction_10m: hourly.variables(5)!.valuesArray(),
        wind_gusts_10m: hourly.variables(6)!.valuesArray(),
        sunshine_duration: hourly.variables(7)!.valuesArray(),
      },
    };

    return weatherData;
  }
}
