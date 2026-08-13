import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders kicker, heading, paragraph and the three stacked buttons', () => {
    render(<About />)
    expect(screen.getByText(about.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: about.title })).toBeInTheDocument()
    expect(screen.getByText(about.paragraph)).toBeInTheDocument()
    for (const button of about.buttons) {
      const link = screen.getByRole('link', { name: new RegExp(button.label) })
      expect(link).toHaveAttribute('href', button.href)
    }
    const buttons = screen.getAllByRole('link')
    expect(buttons[0]).toHaveClass('bg-[linear-gradient(to_left,#559af3,#1462f3,#559af3)]')
  })

  it('renders the two overlapping photos with the framed back image', () => {
    render(<About />)
    expect(screen.getByAltText(about.frontAlt)).toBeInTheDocument()
    const back = screen.getByAltText(about.backAlt)
    expect(back).toHaveClass('border-[10px]')
    expect(back).toHaveClass('border-[#f2f2f2]')
  })
})
