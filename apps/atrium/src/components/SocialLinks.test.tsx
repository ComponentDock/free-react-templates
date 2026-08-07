import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders all four social links', () => {
    render(<SocialLinks />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })
})
