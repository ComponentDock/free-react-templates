import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Plinth app', () => {
  it('renders all sections', () => {
    render(<App />)

    // Sidebar brand
    expect(screen.getByText('Plinth.')).toBeInTheDocument()

    // Breadcrumb
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()

    // Portfolio grid
    expect(screen.getByTestId('portfolio-grid')).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(12)

    // Footer
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Plinth — Minimalist Portfolio Template')
  })

  it('has fixed sidebar layout', () => {
    render(<App />)
    const sidebar = screen.getByRole('complementary')
    expect(sidebar).toHaveClass('fixed')
  })
})
