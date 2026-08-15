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
      'section',
      'section',
      'footer',
    ])
  })

  it('renders the full page without console errors', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Launch a startup website online with a proven builder/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/With more than 20 years of experience/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Featured Works' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Creative Team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Get in Touch' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    expect(errorSpy).not.toHaveBeenCalled()
    errorSpy.mockRestore()
  })
})
