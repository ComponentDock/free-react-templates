import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LogoStrip } from './LogoStrip'
import { adLabel, brandName } from '../data'

describe('LogoStrip', () => {
  it('shows the site name on the left and an ad banner on the right', () => {
    render(<LogoStrip />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: adLabel })).toBeInTheDocument()
  })
})
