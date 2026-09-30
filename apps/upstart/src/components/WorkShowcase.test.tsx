import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WorkShowcase } from './WorkShowcase'

describe('WorkShowcase', () => {
  it('renders both case-study headings', () => {
    render(<WorkShowcase />)
    expect(screen.getByRole('heading', { level: 3, name: 'kMix Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Dieter Rams' })).toBeInTheDocument()
  })

  it('shows the client and date meta lines', () => {
    render(<WorkShowcase />)
    expect(screen.getByText('JUVINLE Corp.')).toBeInTheDocument()
    expect(screen.getByText('2020')).toBeInTheDocument()
    expect(screen.getByText('XYZ Inc.')).toBeInTheDocument()
    expect(screen.getByText('2019')).toBeInTheDocument()
  })

  it('renders placeholder case-study images with the View Case Study links', () => {
    render(<WorkShowcase />)
    expect(screen.getByAltText(/kMix Design case study/i)).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/upstart-work-1/960/700',
    )
    expect(screen.getByAltText(/Dieter Rams case study/i)).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/upstart-work-2/960/700',
    )
    expect(screen.getAllByRole('link', { name: 'View Case Study' })).toHaveLength(2)
  })

  it('places the second case-study image on the right via order utilities', () => {
    const { container } = render(<WorkShowcase />)
    const images = container.querySelectorAll('img')
    expect(images[0]?.parentElement?.className).not.toContain('order-2')
    expect(images[1]?.parentElement?.className).toContain('md:order-2')
  })
})
