import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Expo brand name', () => {
    render(<App />)
    expect(screen.getAllByText('Expo').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all section headings', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: /Build audience and grow your brand/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Trusted by over 3,000 world's leading companies/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /We take a steps to build a successful business/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'How we can help' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /We are here to help you for better solutions/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Affordable pricing plan' })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
