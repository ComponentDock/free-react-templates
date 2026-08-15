import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections in order within the landmarks', () => {
    const { container } = render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const sections = container.querySelectorAll('main > section')
    const ids = Array.from(sections).map((section) => section.id || section.className)
    expect(sections).toHaveLength(7)
    expect(ids[0]).toBe('home')
    expect(ids[1]).toBe('about')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('What else do you need?')
    expect(screen.getByRole('heading', { name: /visually clean/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Multiple Layouts' }).length).toBeGreaterThan(0)
    expect(screen.getByText('2536')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /the importance of light/i })).toBeInTheDocument()
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /subscribe/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('renders the brand in the header and hero', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'Pixora' })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 }).querySelector('span')).toHaveTextContent(
      'Pixora',
    )
  })
})
