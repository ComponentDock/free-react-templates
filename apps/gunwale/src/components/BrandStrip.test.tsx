import { render, screen } from '@testing-library/react'
import { BrandStrip } from './BrandStrip'
import { SITE_NAME, SOCIAL_LABEL } from '../lib/site'

describe('BrandStrip — the white row above the bar', () => {
  it('puts the wordmark on the left half and the channels on the right', () => {
    render(<BrandStrip />)

    const strip = screen.getByTestId('brand-strip')
    const [left, right] = Array.from(strip.firstElementChild!.children)

    expect(left?.contains(screen.getByRole('link', { name: SITE_NAME }))).toBe(true)
    expect(right?.contains(screen.getByRole('list', { name: SOCIAL_LABEL }))).toBe(true)
    expect(right?.className).toContain('justify-end')
    expect(left?.className).toContain('flex-[1_0_0%]')
    expect(strip.className).toContain('px-[15px]')
  })
})
