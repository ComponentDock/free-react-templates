import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders three ink-coloured testimonials', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('figure')).toHaveLength(3)
    expect(screen.getAllByRole('blockquote')).toHaveLength(3)
    expect(screen.getAllByText('Mark Vaughn')).toHaveLength(3)
    expect(screen.getAllByText('Lublin, Poland')).toHaveLength(3)
  })
})
