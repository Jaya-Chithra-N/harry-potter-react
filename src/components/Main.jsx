import React from 'react'
import { characters, houses, books, creatures } from '../data'

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  )
}

export default function Main() {
  return (
    <main className="main-section">
      <section id="characters" className="section">
        <h2>🪄 Characters</h2>
        <div className="grid">
          {characters.map((c) => (
            <Card key={c.name} title={c.name}>
              <p>{c.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="houses" className="section">
        <h2>🏰 Hogwarts Houses</h2>
        <div className="grid">
          {houses.map((h) => (
            <Card key={h.name} title={h.name}>
              <p>{h.traits}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="books" className="section">
        <h2>📚 Books</h2>
        <div className="grid">
          {books.map((b) => (
            <Card key={b.title} title={`${b.title} (${b.year})`}>
              <p>{b.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="creatures" className="section">
        <h2>🧹 Magical Creatures</h2>
        <div className="grid">
          {creatures.map((m) => (
            <Card key={m.name} title={m.name}>
              <p>{m.info}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
