import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Drape — Fashion E-Commerce Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByText(/Free shipping on orders over \$100/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /New season essentials/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Shop by category' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'New arrivals' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Made to last' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Why shop with us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Journal' })).toBeInTheDocument()
    expect(screen.getByText(/More templates at Component Dock/)).toBeInTheDocument()
  })
})
