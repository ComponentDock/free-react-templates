import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Commitment } from './Commitment'

describe('Commitment', () => {
  it('shows the heading, an image with an accessible label, copy, and a Read More link', () => {
    const { container } = render(<Commitment />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'We are commited for better service' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/more than just a clinic/)).toBeInTheDocument()

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image).toHaveAttribute('alt')
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/petcare-commit/)

    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#services')
  })
})
