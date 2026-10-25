import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('is a single #about target holding the heading, the video and the counters', () => {
    const { container } = render(<About />)

    const sections = container.querySelectorAll('#about')
    expect(sections).toHaveLength(1)

    const section = sections[0] as HTMLElement
    expect(section).toHaveTextContent(about.heading)
    expect(section).toHaveTextContent(about.blurb)
    expect(screen.getByRole('button', { name: 'Play the Dockyard showreel' })).toBeInTheDocument()
    expect(screen.getByLabelText('Dockyard in numbers')).toBeInTheDocument()
  })

  it('opens with the 48px blue heading over the white band', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { level: 2, name: about.heading })
    expect(heading).toHaveClass('text-brand', 'normal-case', 'lg:text-[48px]')
  })
})
