import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { ImageSplit } from './ImageSplit'

describe('ImageSplit', () => {
  it('renders two image divs with background images', () => {
    const { container } = render(<ImageSplit />)
    const divs = container.querySelectorAll('.bg-cover')
    expect(divs.length).toBe(2)
    expect(divs[0]?.getAttribute('style')).toContain('huddle-split-1')
    expect(divs[1]?.getAttribute('style')).toContain('huddle-split-2')
  })

  it('accepts custom seed props', () => {
    const { container } = render(<ImageSplit seed1="custom-1" seed2="custom-2" />)
    const divs = container.querySelectorAll('.bg-cover')
    expect(divs[0]?.getAttribute('style')).toContain('custom-1')
    expect(divs[1]?.getAttribute('style')).toContain('custom-2')
  })
})
