import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Kindred — Charity Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Give A Hand To Make The Better World' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Kindred Charity' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Help & Support' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Gifts into Service Project that Change' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Become a Volunteer' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Priorities' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Waterless Drinking in Africa' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Days in Campaign')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Sponsorship Scheme, Individual and Corporate Entities Undertake',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Success Stories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
  })
})
