import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Fixly — Auto Repair Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Looking for the Right Vehicle Repair Service/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Contact Details/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Schedule Your Appointment Today/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /This is our some of the many auto repair services we offer/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Get Car Repair In Easy Steps/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Technical Statistics/i })).toBeInTheDocument()
    // "Expert Mechanics" appears twice: the Why Choose Us card and the section heading.
    expect(screen.getAllByRole('heading', { name: /Expert Mechanics/i })).toHaveLength(2)
    expect(screen.getByRole('heading', { name: /Happy Customers/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent From Blog/i })).toBeInTheDocument()
  })
})
