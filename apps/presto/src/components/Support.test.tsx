import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Support } from './Support'

describe('Support', () => {
  it('renders the two-line title and blurb on the dark band', () => {
    render(<Support />)
    const section = screen.getByRole('region', { name: 'Expert support' })
    expect(section).toHaveClass('pt-[130px]', 'pb-[130px]', 'from-violet-deep', 'to-violet')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Around-the-clock expert support' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/no ticket queues that stall overnight/)).toBeInTheDocument()
  })

  it('renders exactly two lilac contact chips with white icons', () => {
    render(<Support />)
    const chips = screen.getAllByRole('link')
    expect(chips).toHaveLength(2)

    const phone = screen.getByRole('link', { name: '+1 415 555 0182' })
    expect(phone).toHaveAttribute('href', 'tel:+14155550182')
    expect(phone).toHaveClass('bg-lilac', 'rounded-[10px]', 'py-[35px]')

    const chat = screen.getByRole('link', { name: 'Chat with an engineer' })
    expect(chat).toHaveAttribute('href', 'mailto:help@prestohosting.example')
    expect(chat.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
