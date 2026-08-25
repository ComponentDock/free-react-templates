import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Solutions } from './Solutions'

describe('Solutions', () => {
  it('renders the heading block and four solution cards', () => {
    render(<Solutions />)

    expect(screen.getByText('Our Solutions')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /consulting solutions for the streaming era/i,
      }),
    ).toBeInTheDocument()

    for (const title of [
      'Streamlined Operations',
      'Growth Marketing',
      'Product Development',
      'Consulting & Advisory',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const learnMoreLinks = screen.getAllByRole('link', { name: 'Learn More' })
    expect(learnMoreLinks.length).toBeGreaterThanOrEqual(4)
  })

  it('shows four card images', () => {
    render(<Solutions />)
    expect(document.querySelectorAll('article img')).toHaveLength(4)
  })
})
