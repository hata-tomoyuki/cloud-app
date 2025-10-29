import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__image" />
        <div className="hero__overlay" />
      </section>

      <section className="banner">
        <h1 className="banner__title">くもさんみっけ！スタンプぺったん！</h1>
        <div className="actions">
          <button className="action action--start">はじめる</button>
          <button className="action action--zukan" onClick={() => navigate('/zukan')}>ずかん</button>
        </div>
      </section>

      <section className="badge">
        <img src="/assets/badge.png" alt="badge" className="badge__image" />
      </section>
    </div>
  )
}

export default Home
