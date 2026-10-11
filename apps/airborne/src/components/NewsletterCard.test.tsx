import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewsletterCard } from './NewsletterCard'

describe('NewsletterCard', () => {
  it('renders the white card with its title, form, note and credit', () => {
    const { container } = render(<NewsletterCard />)

    const card = container.firstElementChild

    expect(card).toHaveClass(
      'w-[390px]',
      'max-w-full',
      'rounded-card',
      'bg-card',
      'pt-[50px]',
      'pb-[18px]',
      'px-[45px]',
      'max-[576px]:px-[15px]',
    )

    const title = screen.getByRole('heading', { level: 2, name: 'Newsletter' })

    expect(title).toHaveClass(
      'pb-[43px]',
      'text-center',
      'font-heading',
      'text-[30px]',
      'font-bold',
      'text-title',
      'uppercase',
    )

    const note = screen.getByText(/hate spam too/i)

    expect(note).toHaveClass('px-[15px]', 'pt-[25px]', 'text-center', 'text-[13px]', 'text-note')

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()

    // the credit is the card's last line, directly under the note
    expect(card?.lastElementChild?.textContent).toContain('Component Dock')
  })

  it('accepts a className override on the card', () => {
    const { container } = render(<NewsletterCard className="shadow-lg" />)

    expect(container.firstElementChild).toHaveClass('shadow-lg')
  })
})
