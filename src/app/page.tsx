"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
export default function Home() {
  const [temperatureData, setTemperatureData] = useState({ Humedad: 0, Temperatura: 0 });
  const [hydroponicsData, setHydroponicsData] = useState({ Temperatura: 0, Conductividad: 0, pH: 0 });

  useEffect(() => {
    const fetchTemperatureData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/temperature');
        setTemperatureData(response.data);
      } catch (error) {
        console.error('Error fetching temperature data:', error);
      }
    };

    const fetchHydroponicsData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/hidroponia');
        setHydroponicsData(response.data);
      } catch (error) {
        console.error('Error fetching hydroponics data:', error);
      }
    };

    const interval = setInterval(() => {
      fetchTemperatureData();
      fetchHydroponicsData();
    }, 5000);

    return () => {
      clearInterval(interval);
    };

    fetchTemperatureData();
    fetchHydroponicsData();
  }, []);

  const renderTemperatureSuggestions = () => {
    const { Temperatura } = temperatureData;
    if (Temperatura < 20 || Temperatura > 30) {
      return "La temperatura del servidor está fuera del rango óptimo (20-30°C).";
    }
    return "La temperatura del servidor es adecuada.";
  };

  const renderHumiditySuggestions = () => {
    const { Humedad } = temperatureData;
    if (Humedad < 30 || Humedad > 60) {
      return "Los niveles de humedad en la sala de servidores son subóptimos.";
    }
    return "Los niveles de humedad en la sala de servidores son adecuados.";
  };

  const renderHydroponicsSuggestions = () => {
    const { Temperatura, Conductividad, pH } = hydroponicsData;
    let suggestions = [];

    if (Temperatura < 20 || Temperatura > 30) {
      suggestions.push("La temperatura del agua está fuera del rango óptimo (20-30°C).");
    }

    if (Conductividad < 100 || Conductividad > 200) {
      suggestions.push("La conductividad del agua está fuera del rango óptimo (100-200).");
    }

    if (pH < 6.0 || pH > 7.0) {
      suggestions.push("El pH del agua está fuera del rango óptimo (6.0-7.0).");
    }

    if (suggestions.length === 0) {
      suggestions.push("El estado del agua es óptimo para el cultivo en hidroponía.");
    }

    return (
      <div>
        {suggestions.map((suggestion, index) => (
          <p key={index}>{suggestion}</p>
        ))}
      </div>
    );
  };

  return (
    <section className={styles.Home}>
      <div className={styles.Header}>
        <div className={styles.HeaderContent}>
          <h1>Sistema de Monitoreo</h1>
          <p className={styles.Subtitle}>Monitoreo avanzado de sensores</p>
        </div>
      </div>
      <article>
        <div className={styles.CardContainer}>
          <div className={`${styles.Card} ${styles.WaterCard}`}>
            <h2>Estado del Agua</h2>
            <p className={styles.CardText}>{renderHydroponicsSuggestions()}</p>
            <Link href="/views/hidroponia" className={`btn ${styles.CardButton}`}>Ver estadísticas</Link>
          </div>
          <div className={`${styles.Card} ${styles.RoomCard}`}>
            <h2 className={styles.CardTitle}>Estado de la Sala</h2>
            <p className={styles.CardText}>{renderTemperatureSuggestions()}</p>
            <p className={styles.CardText}>{renderHumiditySuggestions()}</p>
            <Link href="/views/temperature" className={`btn ${styles.CardButton}`}>Ver estadísticas</Link>
          </div>
        </div>
      </article>
    </section>
  );
}
