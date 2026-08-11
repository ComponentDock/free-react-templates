import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the script subheading, title, paragraph and orange play button', () => {
    const { container } = render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Appetizer Restaurant' }),
    ).toBeInTheDocument()
    // Script word is aria-hidden but rendered in Miss Fajardose.
    const script = container.querySelector('.font-script')
    expect(script).toHaveTextContent('About')
    expect(script!.className).toContain('text-brand')

    const play = screen.getByRole('button', { name: 'Play about video' })
    expect(play.className).toContain('bg-brand')
    expect(play.className).toContain('rounded-full')
    // Overlaps the next section's top edge.
    expect(play.className).toContain('-mb-[45px]')
  })
})
