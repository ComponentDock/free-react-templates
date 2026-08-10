import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderTop } from './HeaderTop'
import { headerSocials, siteName, socialLabels } from '../data'

describe('HeaderTop', () => {
  it('shows the social icons on the left', () => {
    render(<HeaderTop />)
    for (const name of headerSocials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('shows the centered logo', () => {
    render(<HeaderTop />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
  })

  it('shows the search icon and About/Subscribe links on the right', () => {
    render(<HeaderTop />)
    expect(screen.getByRole('link', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
