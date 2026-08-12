import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Build } from './Build'

describe('Build', () => {
  it('shows an image on the left and the headline on the right', () => {
    const { container } = render(<Build />)

    const section = screen.getByRole('region', { name: 'Build' })
    expect(container.querySelector('img')?.getAttribute('src')).toContain(
      'picsum.photos/seed/axiom-build',
    )
    expect(
      within(section).getByRole('heading', {
        level: 2,
        name: 'We Help you to Build your Product and Brand For Big or Small',
      }),
    ).toBeInTheDocument()
  })

  it('shows the grey description and the yellow-underlined Visit Our Profile link', () => {
    render(<Build />)

    const section = screen.getByRole('region', { name: 'Build' })
    const paragraph = within(section).getByText(/from the first sketch/i)
    expect(paragraph).toHaveClass('text-body')
    const link = within(section).getByRole('link', { name: 'Visit Our Profile' })
    expect(link).toHaveAttribute('href', '#work')
    expect(link).toHaveClass('after:bg-yellow')
  })
})
