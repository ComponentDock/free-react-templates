import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading, four questions, and an image panel', () => {
    const { container } = render(<Faq />)
    expect(screen.getByRole('heading', { name: 'Frequently Asks Questions' })).toBeInTheDocument()
    for (const question of [
      'How to Make an Account?',
      'How to manage your Dashboard?',
      'How to grow your investments funds?',
      'What are those requirements for businesses?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringMatching(/picsum\.photos\/seed\/nebuly-faq/),
    )
  })

  it('expands the first question by default with the brand indigo active style', () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: 'How to Make an Account?' })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveClass('bg-brand')
  })

  it('collapses the open item and expands the activated one', () => {
    render(<Faq />)
    const second = screen.getByRole('button', { name: 'How to manage your Dashboard?' })
    fireEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveClass('bg-brand')
    const first = screen.getByRole('button', { name: 'How to Make an Account?' })
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(first).not.toHaveClass('bg-brand')
  })

  it('toggles the same item closed when activated again', () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: 'How to Make an Account?' })
    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })
})
