import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sweatly — Fitness Template')
  })

  it('composes every section in demo order with the right landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const main = screen.getByRole('main')
    const sections = main.querySelectorAll('section')
    expect(sections).toHaveLength(10)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Fitness Help Me Feel Better' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Setup Your Body With Workout' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get The Result You Want' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Classes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Every Step Counts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Schedule' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Your Fitness Partner Where Ever You Are' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Trainers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
