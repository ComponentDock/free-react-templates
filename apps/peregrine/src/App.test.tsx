import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  aboutTitle,
  blogSectionTitle,
  destinationSectionTitle,
  heroTitle,
  hotelsSectionTitle,
  servicesSectionTitle,
  subscribeTitle,
  testimonialsSectionTitle,
  tipsTitle,
} from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Peregrine — Travel Template')
  })

  it('composes every section in order inside the main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h2')).map((h) => h.textContent)

    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    const expectedOrder = [
      destinationSectionTitle,
      servicesSectionTitle,
      aboutTitle,
      hotelsSectionTitle,
      tipsTitle,
      testimonialsSectionTitle,
      blogSectionTitle,
      subscribeTitle,
    ]
    const positions = expectedOrder.map((title) => headings.indexOf(title))
    expect(
      positions.every(
        (position, index) => position !== -1 && position >= (positions[index - 1] ?? -1),
      ),
    ).toBe(true)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
