import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Smithy — Portfolio App', () => {
  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getAllByText('Smithy').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /I am Alex Smith/i })).toBeInTheDocument()
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Introduce about myself/i })).toBeInTheDocument()
  })

  it('renders the Brands section', () => {
    render(<App />)
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('renders the Services section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /service offers/i })).toBeInTheDocument()
  })

  it('renders the Portfolio section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /quality work/i })).toBeInTheDocument()
  })

  it('renders the Testimonials section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /client say about me/i })).toBeInTheDocument()
  })

  it('renders the Newsletter section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /get update from anywhere/i })).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
