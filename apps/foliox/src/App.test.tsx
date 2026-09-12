import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Foliox').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('For More Agency')
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Methods' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Clients' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
