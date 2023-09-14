"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import axios from 'axios';

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

    return suggestions.join(' ');
  };

  return (
    <section className={styles.Home}>
      <h1>Bienvenido al sistema de monitoreo</h1>
      <article>
        <h2>En esta sección, encontrarás sugerencias y posibles informes basados en los datos de tus sensores.</h2>
        <div className="row">
          <div className="col-sm-6 text-center">
            <div className="card">
              <div className="card-body">
                <h5>Estado del agua</h5>
                <p className="card-text">{renderHydroponicsSuggestions()}</p>
                <Link href="/views/hidroponia" className="btn btn-primary">Ver estadisticas</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Estado de la sala</h5>
                <p className="card-text">{renderTemperatureSuggestions()}</p>
                <p className="card-text">{renderHumiditySuggestions()}</p>
                <Link href="/views/temperature" className="btn btn-primary">Ver estadisticas</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
