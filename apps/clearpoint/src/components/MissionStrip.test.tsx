import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MissionStrip } from './MissionStrip'

describe('MissionStrip', () => {
  it('renders the mission label, headline, paragraph and Learn More link', () => {
    render(<MissionStrip />)

    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /Foremost & Premier Source For Everything Business/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/world-class business advice/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')
  })

  it('applies the green top border and light background', () => {
    render(<MissionStrip />)
    const section = document.querySelector('section')
    expect(section).toHaveClass('border-t-[12px]', 'border-brand-dark', 'bg-mist')
  })
})
