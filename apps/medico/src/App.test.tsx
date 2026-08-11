import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import {
  blogHeading,
  departmentsHeading,
  doctorsHeading,
  heroEyebrow,
  heroTitle,
  reservationHeading,
  servicesHeading,
  skipLabel,
} from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Medico — Medical / Health Care Template')
  })

  it('composes all sections in order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Header
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    // Hero
    expect(screen.getByText(heroEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    // About
    expect(screen.getByRole('heading', { level: 2, name: 'About us' })).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { level: 2, name: servicesHeading })).toBeInTheDocument()
    // Departments
    expect(screen.getByRole('heading', { level: 2, name: departmentsHeading })).toBeInTheDocument()
    // Doctors
    expect(screen.getByRole('heading', { level: 2, name: doctorsHeading })).toBeInTheDocument()
    // Reservation
    expect(screen.getByRole('heading', { level: 2, name: reservationHeading })).toBeInTheDocument()
    // Blog
    expect(screen.getByRole('heading', { level: 2, name: blogHeading })).toBeInTheDocument()
  })

  it('provides a skip link that jumps to the main landmark', async () => {
    const user = userEvent.setup()
    render(<App />)

    const skip = screen.getByRole('link', { name: skipLabel })
    expect(skip).toHaveAttribute('href', '#main')
    await user.tab()
    expect(skip).toHaveFocus()
  })
})
