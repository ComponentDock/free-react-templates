import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the title, photo, paragraph and Learn More button', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Create interactive prototypes' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute(
      'href',
      '#contact-section',
    )
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/liftoff-4/600/450',
    )
  })
})
