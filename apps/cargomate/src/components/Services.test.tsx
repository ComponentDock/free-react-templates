import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the eyebrow, headline, and three service cards', () => {
    render(<Services />)

    expect(screen.getByText('Our Offered Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We offer Various Services to get you covered' }),
    ).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { name: 'Did not find your Package' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(3)
  })
})
