import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Highlights } from './Highlights'

describe('Highlights', () => {
  it('renders a play button for the video highlights block', () => {
    render(<Highlights />)
    expect(screen.getByRole('button', { name: 'Play highlights video' })).toBeInTheDocument()
  })

  it('uses the seeded video background image', () => {
    const { container } = render(<Highlights />)
    const wrap = container.querySelector('.relative')
    expect(wrap?.getAttribute('style')).toContain('picsum.photos/seed/slugger-video')
  })
})
