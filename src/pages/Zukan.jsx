import React from 'react'
import './Zukan.css'

const cards = [
  { emoji: '☁️', title: 'わたぐも', desc: 'ふわふわのやさしいくも', discovered: true },
  { emoji: '🌈', title: 'にじぐも', desc: 'きれいなにじがかかったくも', discovered: true },
  { emoji: '🌧️', title: 'あまぐも', desc: 'あめをふらせるくも', discovered: true },
  { emoji: '❓', title: '？？？', desc: '', discovered: false },
  { emoji: '⛈️', title: 'かみなりぐも', desc: 'ゴロゴロとおとがするくも', discovered: true },
  { emoji: '❓', title: '？？？', desc: '', discovered: false },
  { emoji: '❓', title: '？？？', desc: '', discovered: false },
  { emoji: '☀️', title: 'たいようぐも', desc: 'まぶしくかがやくくも', discovered: true },
  { emoji: '❓', title: '？？？', desc: '', discovered: false },
  { emoji: '❓', title: '？？？', desc: '', discovered: false },
]

function Zukan() {
  const discoveredCount = cards.filter(c => c.discovered).length

  return (
    <div className="zukan">
      <div className="zukan__bg" />

      <div className="zukan__panel">
        <div className="zukan__header-image">
          <img src="/assets/zukan-hero.png" alt="もくもくラリー" />
        </div>

        <div className="zukan__head">
          <h2 className="zukan__title">くもコレクション</h2>

          <div className="zukan__stats">
            <span className="zukan__stats-label">みつけたくも：</span>
            <span className="zukan__stats-num">{discoveredCount}</span>
            <span className="zukan__stats-total"> / 10</span>
          </div>
        </div>

        <div className="zukan__grid">
          {cards.map((c, i) => (
            <div key={i} className={"cloud-card" + (c.discovered ? "" : " cloud-card--unknown")}>
              <div className="cloud-card__emoji" style={{ opacity: c.discovered ? 1 : 0.5 }}>{c.emoji}</div>
              <div className="cloud-card__title">{c.title}</div>
              {c.desc && <div className="cloud-card__desc">{c.desc}</div>}
              <div className={"cloud-card__pill" + (c.discovered ? " cloud-card__pill--get" : " cloud-card__pill--miss")}>
                {c.discovered ? 'GET!' : '未発見'}
              </div>
            </div>
          ))}
        </div>

        <button className="zukan__back">もどる</button>
      </div>
    </div>
  )
}

export default Zukan
