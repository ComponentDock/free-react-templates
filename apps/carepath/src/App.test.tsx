import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('CarePath — Medical & Healthcare')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the hero banner with correct heading and CTAs', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /making health care better together/i }),
    ).toBeInTheDocument()
    // "Make an Appointment" appears in both Navbar and HeroBanner
    const appointmentLinks = screen.getAllByRole('link', { name: /make an appointment/i })
    expect(appointmentLinks.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('link', { name: /view department/i })).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 3, name: /primary care/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /emergency cases/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /online appointment/i }),
    ).toBeInTheDocument()
  })

  it('renders services section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 2, name: /awesome health service/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /neurology service/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /dental clinic/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /plastic surgery/i })).toBeInTheDocument()
  })

  it('renders about section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 2, name: /second abundantly/i }),
    ).toBeInTheDocument()
  })

  it('renders team section with three doctors', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 2, name: /carepath experience doctors/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /dr adam brain/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /dr sarah chen/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /dr michael reed/i })).toBeInTheDocument()
  })

  it('renders appointment section with FAQ and form', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 2, name: /have some questions/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /make an appointment/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders blog section', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 2, name: /get every single update/i }),
    ).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)

    const componentDockLink = screen.getByRole('link', { name: /component dock/i })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
