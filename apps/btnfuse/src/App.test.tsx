import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page header "Button #09"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /button #09/i })).toBeInTheDocument()
  })

  it('renders the Pick Your Color section with four buttons', () => {
    render(<App />)
    expect(screen.getByText('Default Primary')).toBeInTheDocument()
    expect(screen.getByText('Default Secondary')).toBeInTheDocument()
    expect(screen.getByText('Default Tertiary')).toBeInTheDocument()
    expect(screen.getByText('Default Gradient')).toBeInTheDocument()
  })

  it('renders the white left-icon stat cards', () => {
    render(<App />)
    expect(screen.getByTestId('white-left')).toBeInTheDocument()
    expect(screen.getAllByText('New Posts').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('New Comment').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Bounce Rate').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Total Visits').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the white right-icon stat cards', () => {
    render(<App />)
    expect(screen.getByTestId('white-right')).toBeInTheDocument()
    expect(screen.getAllByText('New Projects').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('New Clients').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Conversion Rate').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Support Tickets').length).toBeGreaterThanOrEqual(1)
  })

  it('renders stat card numbers', () => {
    render(<App />)
    expect(screen.getAllByText('275').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('109').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('68 %').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('343').length).toBeGreaterThanOrEqual(2)
  })

  it('renders colored stat card sections', () => {
    render(<App />)
    expect(screen.getByTestId('colored-left')).toBeInTheDocument()
    expect(screen.getByTestId('colored-right')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
