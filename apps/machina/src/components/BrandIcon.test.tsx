import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'
import { FOOTER_SOCIALS } from '../data'

describe('BrandIcon', () => {
  it.each(FOOTER_SOCIALS)('renders a labeled %s icon link', (social) => {
    render(<BrandIcon name={social} label={social} />)
    const link = screen.getByRole('link', { name: social })
    expect(link.querySelector('svg path')).toHaveAttribute('d', expect.any(String))
  })
})
