import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the RegVault heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Set The Event')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('RegVault — Event Registration Form')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the form fields', () => {
    render(<App />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/comment/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send your booking/i })).toBeInTheDocument()
  })

  it('renders the price display', () => {
    render(<App />)
    expect(screen.getByText('$270')).toBeInTheDocument()
  })

  it('renders the people dropdown', () => {
    render(<App />)
    expect(screen.getByDisplayValue('1')).toBeInTheDocument()
  })

  it('renders the event image', () => {
    render(<App />)
    expect(screen.getByAltText(/event performer/i)).toBeInTheDocument()
  })

  it('renders the contact info overlay', () => {
    render(<App />)
    expect(screen.getByText(/31st East Street, New York, NY/)).toBeInTheDocument()
    expect(screen.getByText(/T: 987 2345 743/)).toBeInTheDocument()
    expect(screen.getByText(/E: INFO@YOURWEB\.COM/)).toBeInTheDocument()
  })
})
