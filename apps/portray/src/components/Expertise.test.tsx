import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Expertise } from './Expertise'
import { expertise } from '../data'

describe('Expertise', () => {
  it('stacks three headings in one neon box, only the first at full ink', () => {
    render(<Expertise />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My expertise')
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.map((node) => node.textContent)).toEqual([
      'User Experience Design',
      'User Interface Design',
      'Web Design',
    ])
    expect(headings[0]!.className).toContain('text-ink')
    expect(headings[0]!.className).not.toContain('text-ink/30')
    expect(headings[1]!.className).toContain('text-ink/30')
    expect(headings[2]!.className).toContain('text-ink/30')
    expect(headings[0]!.parentElement?.className).toContain('bg-neon')
  })

  it('renders the two grey paragraphs and the rotated white notch', () => {
    const { container } = render(<Expertise />)
    for (const paragraph of expertise.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    const notch = container.querySelector('.rotate-45')
    expect(notch?.className).toContain('bg-white')
    expect(notch).toHaveAttribute('aria-hidden', 'true')
  })
})
