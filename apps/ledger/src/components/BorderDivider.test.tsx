import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BorderDivider } from './BorderDivider'

describe('BorderDivider', () => {
  it('renders a 5px brand-tint divider bar', () => {
    const { getByTestId } = render(<BorderDivider />)
    const divider = getByTestId('border-divider')
    expect(divider).toHaveClass('h-[5px]')
    expect(divider).toHaveClass('bg-brand-tint')
    expect(divider).toHaveAttribute('aria-hidden', 'true')
  })
})
