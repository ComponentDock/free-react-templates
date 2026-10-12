import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Flourish, type FlourishVariant } from './Flourish'

const VARIANTS: FlourishVariant[] = ['rule', 'eyebrow', 'laurel', 'corner']

describe('Flourish', () => {
  it('draws each ornament as decorative inline svg', () => {
    const { container } = render(
      <>
        {VARIANTS.map((variant) => (
          <Flourish key={variant} variant={variant} className={`ornament-${variant}`} />
        ))}
      </>,
    )

    const ornaments = container.querySelectorAll('svg')

    expect(ornaments).toHaveLength(VARIANTS.length)

    for (const ornament of ornaments) {
      expect(ornament).toHaveAttribute('aria-hidden', 'true')
      expect(ornament.getAttribute('viewBox')).toMatch(/^0 0 \d+ \d+$/)
      expect(ornament.querySelectorAll('path').length).toBeGreaterThan(1)
    }

    expect(container.querySelector('.ornament-rule')).not.toBeNull()
    expect(container.querySelector('.ornament-laurel')).not.toBeNull()
  })
})
