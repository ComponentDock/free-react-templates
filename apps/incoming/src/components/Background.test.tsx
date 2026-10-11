import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Background } from './Background'

describe('Background', () => {
  it('renders one deterministic full-bleed placeholder photo', () => {
    const { container } = render(<Background />)

    const photo = container.querySelector('img')
    expect(photo).toHaveAttribute('src', 'https://picsum.photos/seed/incoming-bg-1/1600/1000')
    expect(photo).toHaveClass('object-cover', 'object-center')
    expect(container.querySelectorAll('img')).toHaveLength(1)
  })

  it('is hidden from assistive technology', () => {
    const { container } = render(<Background />)

    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  })

  it('accepts a className override', () => {
    const { container } = render(<Background className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
