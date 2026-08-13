import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Welcome } from './Welcome'
import { welcome } from '../data'

describe('Welcome', () => {
  it('renders the heading and both (identical) paragraphs', () => {
    render(<Welcome />)
    expect(screen.getByRole('heading', { level: 2, name: welcome.heading })).toBeInTheDocument()
    // The source repeats the same paragraph twice.
    expect(screen.getAllByText(welcome.paragraphs[0]!)).toHaveLength(2)
    const cta = screen.getByRole('link', { name: welcome.cta })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta).toHaveStyle({ background: 'linear-gradient(to right, #244cfd, #15e4fd)' })
  })

  it('renders the welcome image and the framed text panel border', () => {
    const { container } = render(<Welcome />)
    const img = container.querySelector('img') as HTMLImageElement
    expect(img).toHaveAttribute('src', welcome.image)
    expect(img).toHaveClass('w-[120%]')
    const panel = container.querySelector('.border-\\[10px\\]') as HTMLElement
    expect(panel).toHaveClass('border-[#f9f9f9]')
    expect(panel).toHaveClass('lg:p-[100px]')
  })
})
