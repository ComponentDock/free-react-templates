import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MobileCta } from '../components/MobileCta'

describe('MobileCta', () => {
  it('is absent while the cookie strip owns the bottom of the screen', () => {
    render(<MobileCta hidden />)

    expect(screen.queryByTestId('mobile-cta')).not.toBeInTheDocument()
  })

  it('offers the two community controls once the strip is gone', () => {
    render(<MobileCta hidden={false} />)

    expect(screen.getByTestId('mobile-cta')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read the threads' })).toHaveAttribute(
      'href',
      '#discussions',
    )
    expect(screen.getByRole('link', { name: 'Join the Community' })).toHaveAttribute(
      'href',
      '#pricing',
    )
  })
})
