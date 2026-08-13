import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the counters, the split copy with a Get In Touch button, and a green-shadowed photo', () => {
    const { container } = render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'Step Up Your Fitness' })).toHaveClass(
      'text-primary',
      'font-black',
    )
    const cta = screen.getByRole('link', { name: 'Get In Touch' })
    expect(cta).toHaveAttribute('href', '#contact-section')
    expect(cta).toHaveClass('bg-primary', 'text-btn-text')
    expect(screen.getByRole('img', { name: /athlete training/i })).toHaveClass(
      'shadow-[10px_10px_0_0_#48d494]',
    )
    expect(container.querySelector('.grid')).not.toBeNull()
    expect(screen.getByText('2,260')).toBeInTheDocument()
  })
})
