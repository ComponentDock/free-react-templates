import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StarRating } from './StarRating'

describe('StarRating', () => {
  it('renders five stars with the last one faded', () => {
    const { container } = render(<StarRating />)

    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
    expect(stars[0]!.getAttribute('class')).toContain('text-star')
    expect(stars[3]!.getAttribute('class')).toContain('text-star')
    expect(stars[4]!.getAttribute('class')).toContain('text-star-faded')
  })
})
