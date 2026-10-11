import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the page in the reference section order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('section, footer, header')).map(
      (node) => node.id,
    )
    expect(ids).toEqual([
      '',
      'home',
      'domains',
      'services',
      'pricing',
      'achievements',
      'work',
      'choose-plan',
      'contact',
    ])
  })

  it('renders the header, hero, every section body and the footer', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Welcome to the best hosting company',
    )
    expect(
      screen.getByRole('heading', { level: 2, name: 'Register your domain now!' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose the right hosting solution' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Choose your plan' })).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'How to build your website online today?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Harbor — Web Hosting Template')
  })
})
