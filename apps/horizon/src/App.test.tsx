import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Coming Soon heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Coming Soon')
  })

  it('sets the document title on mount', () => {
    render(<App />)

    expect(document.title).toBe('Horizon — Coming Soon Template')
  })

  it('renders the maintenance description', () => {
    render(<App />)

    expect(screen.getByText(/currently undergoing scheduled maintenance/i)).toBeInTheDocument()
  })

  it('renders the countdown timer', () => {
    render(<App />)

    expect(screen.getByRole('timer', { name: /countdown timer/i })).toBeInTheDocument()
  })

  it('renders the email signup form', () => {
    render(<App />)

    expect(screen.getByRole('form', { name: /email signup/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has a contentinfo landmark', () => {
    render(<App />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the frame container with border', () => {
    const { container } = render(<App />)

    const frame = container.querySelector('.border-white\\/80')
    expect(frame).toBeInTheDocument()
  })
})
