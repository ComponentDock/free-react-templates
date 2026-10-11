import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders the map placeholder beside the sharp-cornered form', () => {
    const { container } = render(<ContactSection />)

    const section = document.getElementById('contact')!
    expect(section).not.toBeNull()

    const map = container.querySelector('img')!
    expect(map.getAttribute('src')).toContain('picsum.photos/seed/wanderport-map')
    expect(map.parentElement?.className).toContain('h-[545px]')

    const form = screen.getByRole('form', { name: 'Send us a message' })
    expect(form.querySelectorAll('.border-hairline')).toHaveLength(3)
  })

  it('tracks every field and blocks the submit', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    const name = screen.getByPlaceholderText('Enter your name')
    const email = screen.getByPlaceholderText('Enter email address')
    const message = screen.getByPlaceholderText('Message')

    await user.type(name, 'Ada Lovelace')
    await user.type(email, 'ada@wanderport.example')
    await user.type(message, 'Two weeks in the Azores please')

    expect(name).toHaveValue('Ada Lovelace')
    expect(email).toHaveValue('ada@wanderport.example')
    expect(message).toHaveValue('Two weeks in the Azores please')

    const form = screen.getByRole('form', { name: 'Send us a message' })
    expect(fireEvent.submit(form)).toBe(false)
  })

  it('labels the fields for assistive technology', () => {
    render(<ContactSection />)

    expect(screen.getByLabelText('Your name')).toHaveAttribute('name', 'name')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email')

    const submit = screen.getByRole('button', { name: /Send Message/ })
    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit.className).toContain('brand-gradient')
  })
})
