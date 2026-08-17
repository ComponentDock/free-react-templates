import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChoose } from './WhyChoose'
import { WHY_CHOOSE } from '../data'

describe('WhyChoose', () => {
  it('renders the photo, heading, and three numbered feature rows in gold', () => {
    render(<WhyChoose />)

    expect(screen.getByRole('region', { name: 'Why Choose Us' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Legal practice' })).toHaveAttribute(
      'src',
      WHY_CHOOSE.photo,
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(WHY_CHOOSE.heading)

    for (const item of WHY_CHOOSE.items) {
      expect(screen.getByText(item.number)).toHaveClass('text-brand')
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.text)).toBeInTheDocument()
    }
  })
})