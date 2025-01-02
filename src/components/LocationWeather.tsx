import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

interface Location {
  latitude: number | null;
  longitude: number | null;
}

const LocationWeather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            setError(error.message);
          },
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      } catch (err) {
        setError(err.message);
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location.latitude && location.longitude) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.OPENWEATHER_API_KEY}`
          );
          setWeatherData(response.data);
        } catch (err) {
          setError(err.message);
        }
      }
    };

    fetchWeatherData();
  }, [location]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Weather</Text>
      <Text>Temperature: {weatherData.main.temp}°C</Text>
      <Text>Humidity: {weatherData.main.humidity}%</Text>
      <Text>Weather: {weatherData.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
  },
});

export default LocationWeather;
