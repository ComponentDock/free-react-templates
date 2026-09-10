import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the full page with landmarks and a document title', () => {
    render(<App />)

    expect(document.title).toBe('Fleetly — Car Rental Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Section headings in order
    expect(
      screen.getByRole('heading', { level: 1, name: 'Relaxed Journey Ever' }),
    ).toBeInTheDocument()
    expect(screen.getByText('What Services we offer to our clients')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Globally Connected by Large Network' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Choose your Desired Car Model')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Some Features that Made us Unique')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experience Great Support' })).toBeInTheDocument()
    expect(screen.getByText('Latest From Our Blog')).toBeInTheDocument()

    // Footer Component Dock link (mandatory)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
