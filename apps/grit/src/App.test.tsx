import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  classesTitle,
  componentDockLabel,
  contactTitle,
  featuresTitle,
  heroTitle,
  hoursTitle,
  scheduleTitle,
  servicesTitle,
  trainersTitle,
} from './data'

describe('App', () => {
  it('composes every section in the source order', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroTitle)
    expect(screen.getAllByText(hoursTitle).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { level: 2, name: featuresTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: classesTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: scheduleTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: trainersTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: servicesTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: contactTitle })).toBeInTheDocument()
    expect(screen.getByText(componentDockLabel)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Grit — Gym & Fitness Template')
  })
})
