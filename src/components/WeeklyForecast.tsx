import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

interface ForecastData {
  list: {
    dt: number;
    temp: {
      day: number;
    };
    humidity: number;
    weather: {
      description: string;
    }[];
  }[];
}

const WeeklyForecast: React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7&appid=${process.env.OPENWEATHER_API_KEY}`
        );
        setForecastData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchForecastData();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!forecastData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Forecast</Text>
      {forecastData.list.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text>Date: {new Date(day.dt * 1000).toLocaleDateString()}</Text>
          <Text>Temperature: {day.temp.day}°C</Text>
          <Text>Humidity: {day.humidity}%</Text>
          <Text>Weather: {day.weather[0].description}</Text>
        </View>
      ))}
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
  dayContainer: {
    marginVertical: 10,
  },
});

export default WeeklyForecast;
