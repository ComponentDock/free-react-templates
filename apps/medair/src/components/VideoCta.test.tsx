import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders the play button, heading, and both CTAs over the photo band', () => {
    render(<VideoCta />)

    const section = document.querySelector('section')
    expect(section?.style.backgroundImage).toContain('picsum.photos')
    expect(section?.className).toContain('min-h-[500px]')

    const play = screen.getByRole('button', { name: 'Play video' })
    expect(play.className).toContain('rounded-full')
    expect(play.className).toContain('border-brand')

    expect(
      screen.getByRole('heading', { name: 'Start Your Body Changing With Healthy Nutrition' }),
    ).toBeInTheDocument()

    const getStarted = screen.getByRole('link', { name: 'Get Started' })
    expect(getStarted.className).toContain('bg-brand')
    const contact = screen.getByRole('link', { name: 'Contact Us' })
    expect(contact.className).toContain('bg-white')
  })
})
