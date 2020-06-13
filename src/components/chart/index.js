import React from 'react';
import { Line } from 'react-chartjs-2';

export const Chart = ({ data, labels }) => {
    return (
        <Line
            data={{
                labels: labels,
                datasets: [
                    {
                        label: 'Жертвы',
                        data: data,
                        backgroundColor: '#e9c46a',
                    }
                ]
            }}
            options={{
                title: {
                    display: false,
                    text: 'Статистика',
                    fontSize: 24,
                    fontFamily: 'Roboto Mono',
                    fontColor: 'rgb(241, 241, 241)',
                },
                legend: {
                    display: true,
                    labels: {
                        fontFamily: 'Roboto Mono',
                        fontColor: 'rgb(241, 241, 241)',
                    },
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            color: 'rgba(241, 241, 241, 0.3)',
                        },
                        ticks: {
                            fontColor: 'rgb(241, 241, 241)',
                            fontFamily: 'Roboto Mono',
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Популяция",
                            fontColor: 'rgb(241, 241, 241)',
                            fontFamily: 'Roboto Mono',
                            fontSize: 16,
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            color: 'rgb(241, 241, 241, 0.3)',
                        },
                        ticks: {
                            fontColor: 'rgb(241, 241, 241)',
                            fontFamily: 'Roboto Mono',
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Время существования модели",
                            fontColor: 'rgb(241, 241, 241)',
                            fontFamily: 'Roboto Mono',
                            fontSize: 16,
                        }
                    }],
                }
            }}
        />
    );
};
