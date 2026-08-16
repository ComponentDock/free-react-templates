import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('shows the kicker and the heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Take a look at the variety of services we offer/i,
      }),
    ).toBeInTheDocument()
  })

  it('shows three service cards with photo, title and blurb', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Commercial Cleaning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Residential Cleaning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Carpet & Floor Cleaning' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Commercial Cleaning' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByText(/Offices, shops and storefronts/i)).toBeInTheDocument()
  })

  it('shows a circular arrow link per card pointing to contact', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /Learn more about/ })
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
