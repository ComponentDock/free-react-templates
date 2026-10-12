import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { SocialRow } from './SocialRow'

describe('SocialRow', () => {
  it('centres the three hairline circles under the countdown', () => {
    render(<SocialRow />)

    const row = screen.getByTestId('social-row')

    expect(row).toHaveClass('flex', 'flex-wrap', 'items-center', 'justify-center', 'pb-[35px]')
    expect(within(row).getAllByRole('link')).toHaveLength(3)
  })

  it('accepts layout overrides', () => {
    render(<SocialRow className="mt-4" />)

    expect(screen.getByTestId('social-row')).toHaveClass('mt-4')
  })
})
