import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the eyebrow, heading, and sub', () => {
    render(<Services />)

    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByText(/From intimate elopements to grand celebrations/)).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)

    for (const title of [
      'Full Planning',
      'Day-of Coordination',
      'Design & Decor',
      'Venue Selection',
      'Catering & Cake',
      'Entertainment',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
