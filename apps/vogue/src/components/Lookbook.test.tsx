import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Lookbook } from './Lookbook'

describe('Lookbook', () => {
  it('renders the 2019 #lookbook heading, copy and accent See More button', () => {
    render(<Lookbook />)
    expect(screen.getByRole('heading', { level: 2, name: '2019 #lookbook' })).toBeInTheDocument()
    expect(screen.getByText(/Fusce urna quam, euismod sit amet mollis quis/)).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: 'See More' })
    expect(cta.className).toContain('bg-accent')
  })

  it('renders the tall fashion photo with a fashion watermark', () => {
    render(<Lookbook />)
    expect(screen.getByAltText('Fashion lookbook editorial photo')).toBeInTheDocument()
    expect(screen.getByText('fashion')).toBeInTheDocument()
  })
})
