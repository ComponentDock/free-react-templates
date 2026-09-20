import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('GigFest — Concert Event Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Concert 2020')
    expect(screen.getAllByText('Performer').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: 'About Program' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Program Details' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sponsor Logos' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
