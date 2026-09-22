import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the testimonial quote', () => {
    render(<Testimonial />)
    expect(screen.getByText(/GoQuest made our honeymoon/i)).toBeInTheDocument()
  })

  it('renders the founder name', () => {
    render(<Testimonial />)
    expect(screen.getByText('Jessica Robinson')).toBeInTheDocument()
  })

  it('renders the founder title', () => {
    render(<Testimonial />)
    expect(screen.getByText('Founder & CEO')).toBeInTheDocument()
  })

  it('renders the founder avatar image', () => {
    render(<Testimonial />)
    expect(screen.getByRole('img', { name: 'Jessica Robinson' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('has a background image', () => {
    const { container } = render(<Testimonial />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('goquest-testimonial')
  })
})
