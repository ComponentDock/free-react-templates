import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  blogTitle,
  classesTitle,
  componentDockLabel,
  eventsTitle,
  heroTitle,
  newsletterTitle,
  scheduleTitle,
  servicesTitle,
  testimonialsTitle,
  trainersTitle,
} from './data'

describe('App', () => {
  it('composes every section in the source order', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroTitle)
    expect(screen.getByRole('heading', { level: 2, name: servicesTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: scheduleTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: testimonialsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: trainersTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: classesTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: eventsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: blogTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(componentDockLabel)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('PowerGrip — Gym & Fitness Template')
  })
})
