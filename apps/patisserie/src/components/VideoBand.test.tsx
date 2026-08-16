import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { VideoBand } from './VideoBand'
import { videoBand } from '../data'

describe('VideoBand', () => {
  it('renders the full-width band with the decorative play button', () => {
    render(<VideoBand />)
    expect(screen.getByLabelText('Bakery video')).toBeInTheDocument()
    const button = screen.getByRole('button', { name: 'Play bakery video' })
    expect(button).toHaveClass('h-[100px]', 'w-[100px]', 'rounded-full', 'bg-white')
    expect(button.className).toContain('text-brand')
  })

  it('uses the cover photo as the background', () => {
    const { container } = render(<VideoBand />)
    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain(videoBand.image)
  })

  it('includes the gold pulse ring', () => {
    const { container } = render(<VideoBand />)
    expect(container.querySelector('.animate-ping')).toHaveClass('border-brand/40')
  })
})
