import { render, screen } from '@testing-library/react'
import { App } from './App'
import {
  siteName,
  heroTitle,
  aboutTitle,
  servicesTitle,
  departmentsTitle,
  doctorsTitle,
  appointmentTitle,
  testimonialsTitle,
  blogTitle,
} from './data'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Medpact — Hospital & Clinics Template')
  })

  it('renders the skip link', () => {
    render(<App />)
    expect(screen.getByText(/skip to main content/i)).toBeInTheDocument()
  })

  it('renders all major section headings', () => {
    render(<App />)
    expect(screen.getAllByText(siteName).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: aboutTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: servicesTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: departmentsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: doctorsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: appointmentTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: testimonialsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: blogTitle })).toBeInTheDocument()
  })

  it('renders the main element with id', () => {
    render(<App />)
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })
})
