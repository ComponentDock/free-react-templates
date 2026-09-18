import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the app background', () => {
    render(<App />)

    expect(screen.getByTestId('app-background')).toBeInTheDocument()
  })

  it('renders the contact cards', () => {
    render(<App />)

    expect(screen.getByTestId('contact-cards')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders CONTACT US headings', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading', { name: /contact us/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders radio buttons for form mode toggle', () => {
    render(<App />)

    const radios = screen.getAllByRole('radio')
    expect(radios.length).toBeGreaterThanOrEqual(4)
  })

  it('renders submit buttons', () => {
    render(<App />)

    const buttons = screen.getAllByRole('button', { name: /submit/i })
    expect(buttons).toHaveLength(2)
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('FormVolt — Contact Form Template')
  })

  it('renders the background image', () => {
    render(<App />)

    const bgDiv = document.querySelector('[style*="picsum"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
