import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChoose } from './WhyChoose'

describe('WhyChoose', () => {
  it('renders the label, headline, image and three feature items', () => {
    const { container } = render(<WhyChoose />)

    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/topline/)
    expect(screen.getByText('Tons of pre-made sections')).toBeInTheDocument()
    expect(screen.getByText('Complete CMS integration')).toBeInTheDocument()
    expect(screen.getByText('Stellar after-sales support')).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute('alt', expect.stringContaining('team'))
  })
})
