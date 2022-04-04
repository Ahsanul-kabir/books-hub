import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import sellDataSet from '../../fakeData/sellData.json';
import './Dashboard.css'

const Dashboard = () => {
    const [sellData, setSellData] = useState([])

    useEffect(() => {
        setSellData(sellDataSet)
    }, [])

    return (
        <div className="container">
            <section className="row">
                <div className="col-sm-8 col-md-12 col-lg-12">
                    <h1 className="m-3 d-flex justify-content-center graph-heading">Monthly Sell Reports</h1>
                    <ResponsiveContainer width="90%" height={300}>
                        <LineChart data={sellData} margin={{ top: 10, right: 0, left: 30, bottom: 0 }}>
                            <Line type="monotone" dataKey="month" stroke="#8884d8" />
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </section>

            <section className="row m-5">
                <div className="col-sm-8 col-md-12 col-lg-12">
                    <h1 className="m-3 d-flex justify-content-center graph-heading">Monthly Investment VS Revenue Reports</h1>
                    <ResponsiveContainer width="95%" height={300}>
                        <AreaChart width="100%" height={250} data={sellData}
                            margin={{ top: 10, right: 0, left: 30, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </section>

            <section className="row">
                <div className="col-sm-8 col-md-12 col-lg-12">
                    <h1 className="m-3 d-flex justify-content-center graph-heading">Monthly Investment vs Revenue Reports</h1>
                    <ResponsiveContainer width="95%" height={300}>
                        <BarChart width='100%' height={250} data={sellData} margin={{ top: 10, right: 0, left: 30, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" fill="#82ca9d" />
                            <Bar dataKey="revenue" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;