import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Fiscale — Finance Consulting Template')
  })

  it('composes all sections in order with proper landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      'We are a group of financial specialists',
    )
    expect(within(main).getByRole('region', { name: 'Steps' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Features' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Testimonials' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Pricing' })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Call to action' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
