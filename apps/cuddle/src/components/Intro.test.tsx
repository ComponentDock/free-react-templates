import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders heading and paragraphs', () => {
    render(<Intro />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByText('We Help Thousands of Children to Get Their Education'),
    ).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    render(<Intro />)

    expect(screen.getByText('Start Donating')).toBeInTheDocument()
    expect(screen.getByText('Join Our Community')).toBeInTheDocument()
    expect(screen.getByText('Be A Volunteer')).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<Intro />)

    const img = screen.getByAltText('Children in classroom - education support')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/cuddle-about'))
  })

  it('has section with id about', () => {
    const { container } = render(<Intro />)

    const section = container.querySelector('#about')
    expect(section).toBeInTheDocument()
  })
})
