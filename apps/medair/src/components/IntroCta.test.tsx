import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IntroCta } from './IntroCta'

describe('IntroCta', () => {
  it('renders the photo band with overlay, subheading, heading, and appointment button', () => {
    render(<IntroCta />)

    const section = document.querySelector('section')
    expect(section?.style.backgroundImage).toContain('picsum.photos')
    expect(document.querySelector('section [class*="bg-dark/50"]')).not.toBeNull()

    expect(screen.getByText('Finding Balance in Food, Health and Wellness')).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Get Health and Instruction Coach')
    const highlight = heading.querySelector('.text-brand')
    expect(highlight?.textContent).toBe('Instruction Coach')

    const button = screen.getByRole('link', { name: /Make An Appointment/ })
    expect(button).toHaveAttribute('href', '#appointment')
    expect(button.className).toContain('bg-brand')
  })
})
