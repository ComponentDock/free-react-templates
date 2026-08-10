import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MiddleHeader } from './MiddleHeader'
import { bannerSubtitle, bannerTitle, readMoreLabel, siteName } from '../data'

describe('MiddleHeader', () => {
  it('shows the site wordmark logo on the left', () => {
    render(<MiddleHeader />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
  })

  it('shows the ad banner title, subtitle and white READ MORE button', () => {
    render(<MiddleHeader />)
    expect(screen.getByRole('heading', { name: bannerTitle })).toBeInTheDocument()
    expect(screen.getByText(bannerSubtitle)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: readMoreLabel })).toBeInTheDocument()
  })

  it('renders the banner with a background image and dark overlay', () => {
    const { container } = render(<MiddleHeader />)
    const banner = container.querySelector('.bg-cover')
    expect(banner).toHaveStyle({ backgroundImage: expect.stringContaining('herald-banner') })
    expect(banner?.querySelector('.bg-black\\/50')).not.toBeNull()
  })
})
