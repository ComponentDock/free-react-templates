import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('shows the section title and six feature cards with icon medallions', () => {
    const { container } = render(<Features />)

    expect(screen.getByText('The best out there')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'See our features' })).toBeInTheDocument()

    for (const title of [
      'Buy your Domain',
      'Cloud Database',
      'SSD-Only',
      'Smart Contacts',
      'Free Support',
      'Viral Marketing',
    ]) {
      const card = screen.getByRole('heading', { level: 3, name: title }).parentElement!
      expect(card.querySelector('svg')).toBeInTheDocument()
      expect(card).toHaveTextContent('Lorem ipsum dolor sit amet')
    }

    expect(container.querySelectorAll('svg')).toHaveLength(7)
  })
})
