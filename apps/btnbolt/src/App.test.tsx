import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /bootstrap 4 buttons/i })).toBeInTheDocument()
  })

  it('renders the SizeButtons section', () => {
    render(<App />)
    expect(screen.getByText('Large')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
  })

  it('renders the ColorButtons section', () => {
    render(<App />)
    expect(screen.getByText('Button Colors')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /primary/i })).toBeInTheDocument()
  })

  it('renders the BlockButton section', () => {
    render(<App />)
    expect(screen.getByText('Full width button')).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
