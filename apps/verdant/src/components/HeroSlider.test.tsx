import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders', () => {
    const { container } = render(<HeroSlider />)
    expect(container).toBeInTheDocument()
  })
})
