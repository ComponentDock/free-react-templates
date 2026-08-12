import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders each brand glyph with an accessible label', () => {
    render(
      <>
        <BrandIcon name="instagram" ariaLabel="Instagram" />
        <BrandIcon name="facebook" ariaLabel="Facebook" />
        <BrandIcon name="twitter" ariaLabel="Twitter" />
      </>,
    )

    expect(screen.getByRole('img', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Twitter' })).toBeInTheDocument()
  })
})
