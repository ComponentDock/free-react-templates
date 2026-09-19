import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Journal } from './Journal'

describe('Journal', () => {
  it('renders the section heading', () => {
    render(<Journal />)
    expect(screen.getByRole('heading', { name: 'Journal' })).toBeInTheDocument()
  })

  it('renders all three article titles', () => {
    render(<Journal />)
    expect(screen.getByText('The white shirt that goes with everything')).toBeInTheDocument()
    expect(screen.getByText('How to build a capsule wardrobe that lasts')).toBeInTheDocument()
    expect(screen.getByText('Caring for natural fibres so they last a decade')).toBeInTheDocument()
  })

  it('renders dates and categories', () => {
    render(<Journal />)
    expect(screen.getByText(/12 August 2026.*Style/)).toBeInTheDocument()
    expect(screen.getByText(/28 July 2026.*Guides/)).toBeInTheDocument()
    expect(screen.getByText(/9 July 2026.*Care/)).toBeInTheDocument()
  })

  it('has an All posts link', () => {
    render(<Journal />)
    expect(screen.getByRole('link', { name: 'All posts' })).toHaveAttribute('href', '#blog')
  })
})
