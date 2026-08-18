import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Expertise } from './Expertise'
import { expertise } from '../data'

describe('Expertise', () => {
  it('renders the heading and a green block with the three disciplines', () => {
    const { container } = render(<Expertise />)
    expect(screen.getByRole('heading', { level: 2, name: 'My Expertise' })).toBeInTheDocument()

    expertise.forEach((item) => {
      const heading = screen.getByRole('heading', { level: 3, name: item.title })
      expect(heading).toBeInTheDocument()
      expect(within(heading.parentElement!).getByText(item.blurb)).toBeInTheDocument()
    })

    const blocks = container.querySelectorAll('.bg-brand-green')
    expect(blocks.length).toBe(1)
    expect(blocks[0]!.className).toContain('md:px-[65px]')
  })
})
