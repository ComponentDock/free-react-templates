import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in source order', () => {
    const { container } = render(<App />)

    const sections = Array.from(container.querySelectorAll('header, main > section, footer'))
    expect(sections.map((el) => el.tagName.toLowerCase())).toEqual([
      'header',
      'section',
      'section',
      'section',
      'section',
      'section',
      'section',
      'footer',
    ])
  })

  it('renders the full page without console errors', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(0)
    expect(screen.getByText('Unlimited Access to 100K tracks')).toBeInTheDocument()
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText(/Our Concept & artists/)).toBeInTheDocument()
    expect(screen.getByText(/Subscription from \$15\/month/)).toBeInTheDocument()
    expect(screen.getByText('Why go Premium')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    expect(errorSpy).not.toHaveBeenCalled()
    errorSpy.mockRestore()
  })
})
