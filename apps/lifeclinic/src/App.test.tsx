import { render, screen } from '@testing-library/react'
import { App } from './App'
import {
  siteName,
  heroSlides,
  aboutTitle,
  appointmentTitle,
  blogTitle,
  featuresTitle,
  emergencyTitle,
} from './data'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('LifeClinic — Medical & Healthcare Template')
  })

  it('renders the skip link', () => {
    render(<App />)
    expect(screen.getByText(/skip to main content/i)).toBeInTheDocument()
  })

  it('renders all major section headings', () => {
    render(<App />)
    expect(screen.getAllByText(siteName).length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByRole('heading', { level: 1, name: heroSlides[0]!.title }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: appointmentTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: aboutTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: featuresTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: blogTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: emergencyTitle })).toBeInTheDocument()
  })

  it('renders the main element with id', () => {
    render(<App />)
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })
})
