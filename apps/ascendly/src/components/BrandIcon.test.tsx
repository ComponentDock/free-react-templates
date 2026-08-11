import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon, type BrandIconName } from './BrandIcon'

const NAMES: BrandIconName[] = ['facebook', 'x', 'linkedin', 'instagram', 'skype']

describe('BrandIcon', () => {
  it.each(NAMES)('renders an svg glyph for %s', (name) => {
    const { container } = render(<BrandIcon name={name} />)
    const svg = container.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).not.toBeNull()
  })
})
