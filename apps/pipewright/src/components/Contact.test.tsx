import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { CONTACT, PHONE_HREF } from '../content'

describe('Contact', () => {
  it('is the only saturated band, headed in white Inter', () => {
    const { container } = render(<Contact />)
    const band = container.querySelector('section') as HTMLElement
    expect(band).toHaveAttribute('id', 'contact')
    expect(band).toHaveClass('bg-primary-700')

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(CONTACT.heading)
    expect(heading).toHaveClass('text-white', 'font-bold', 'tracking-tight')
    expect(screen.getByText(CONTACT.lede)).toHaveClass('text-primary-100')
  })

  it('pairs a white rectangle with an outlined one — never a pill', () => {
    render(<Contact />)
    const primary = screen.getByRole('link', { name: CONTACT.primary })
    expect(primary).toHaveAttribute('href', PHONE_HREF)
    expect(primary).toHaveClass('rounded-lg', 'bg-white', 'px-8', 'py-4', 'text-primary-700')
    expect(primary).not.toHaveClass('rounded-full')

    const secondary = screen.getByRole('link', { name: CONTACT.secondary })
    expect(secondary).toHaveAttribute('href', CONTACT.mailto)
    expect(secondary).toHaveClass('border-2', 'border-white/40', 'text-white')
    expect(secondary).not.toHaveClass('rounded-full')
  })
})
