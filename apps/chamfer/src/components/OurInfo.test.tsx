import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OurInfo } from './OurInfo'

describe('OurInfo', () => {
  it('renders three feature columns', () => {
    render(<OurInfo />)
    expect(screen.getByText('Clean & Modern')).toBeInTheDocument()
    expect(screen.getByText('Professional Services')).toBeInTheDocument()
    expect(screen.getByText('Creative Solutions')).toBeInTheDocument()
  })

  it('has a dark background section', () => {
    const { container } = render(<OurInfo />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-dark-navy')
  })
})
