import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the heading with the gold underline bar', () => {
    const { container } = render(<SectionTitle heading="Food Lover's Say" />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent("Food Lover's Say")
    const bar = container.querySelector('.bg-brand')
    expect(bar).toBeInTheDocument()
    expect(bar).toHaveClass('h-[2px]', 'w-[100px]')
  })

  it('applies the className to the wrapper', () => {
    const { container } = render(<SectionTitle heading="Our Blogs" className="mb-8" />)
    expect(container.firstElementChild).toHaveClass('mb-8')
  })
})
