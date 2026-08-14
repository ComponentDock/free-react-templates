import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the left passion heading with two paragraphs', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Designing With Passion While Exploring The World.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/great design comes from curiosity/i)).toBeInTheDocument()
    expect(screen.getByText(/from brand identities to product interfaces/i)).toBeInTheDocument()
  })

  it('renders the query blurb with an email link and arrow', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Any Type Of Query & Discussion.' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Late talk with me')).toBeInTheDocument()
    const mail = screen.getByRole('link', { name: /hireme@portfolio\.com/ })
    expect(mail).toHaveAttribute('href', 'mailto:hireme@portfolio.com')
  })
})
