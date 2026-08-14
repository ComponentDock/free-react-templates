import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterBand } from './CounterBand'

describe('CounterBand', () => {
  it('renders the subheading and the years counter heading', () => {
    render(<CounterBand />)

    expect(screen.getByText('A Few Words About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /We're Functioning for Almost 40 Years/ }),
    ).toBeInTheDocument()
  })

  it('renders two paragraphs of about copy', () => {
    const { container } = render(<CounterBand />)

    const section = screen.getByRole('region', { name: 'About the club' })
    expect(section.querySelectorAll('p')).toHaveLength(2)
    expect(container.querySelector('img')).not.toBeNull()
  })
})
