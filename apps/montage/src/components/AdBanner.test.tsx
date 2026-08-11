import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AdBanner } from './AdBanner'
import { addBannerLabel } from '../data'

describe('AdBanner', () => {
  it('renders the full-width ad-banner placeholder', () => {
    render(<AdBanner />)
    const section = screen.getByRole('region', { name: 'Advertisement' })
    expect(section).toHaveTextContent(addBannerLabel)
    expect(section.querySelector('.border-dashed')).toHaveClass('bg-mist')
  })
})
