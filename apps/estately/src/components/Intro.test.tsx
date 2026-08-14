import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the section title and both alternating rows', () => {
    render(<Intro />)
    expect(
      screen.getByRole('heading', { name: 'Sell Faster. Save Thousands.' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We charge 2% total. No hidden fees or upfront costs.' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'How Much Can You Save? We work for you, not commission.',
      }),
    ).toBeInTheDocument()
  })

  it('renders two images and two Find out more links', () => {
    const { container } = render(<Intro />)
    expect(container.querySelectorAll('img')).toHaveLength(2)
    expect(screen.getAllByText('Find out more')).toHaveLength(2)
  })
})
