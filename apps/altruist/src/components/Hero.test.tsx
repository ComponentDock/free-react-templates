import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO } from '../data'

describe('Hero', () => {
  it('renders the headline, copy, play link, photo, and donation box', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'New way to give back' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Watch our intro video')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Children playing on a sunny field' })).toHaveAttribute(
      'src',
      HERO.image,
    )
    expect(screen.getByText('Enter Monthly Donation Amount')).toBeInTheDocument()
    expect(screen.getByLabelText('Currency')).toBeInTheDocument()
    expect(screen.getByLabelText('Donation amount')).toHaveAttribute('placeholder', '125.00')
    expect(screen.getByRole('button', { name: 'Donate Now' })).toBeInTheDocument()
  })

  it('opens the video modal from the play link', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Watch our intro video' }))

    const dialog = screen.getByRole('dialog', { name: 'Intro video' })
    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByTitle('Altruist intro video')).toHaveAttribute('src', HERO.videoUrl)
  })

  it('closes the video modal with the close button', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Watch our intro video' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the video modal with Escape but ignores other keys', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Watch our intro video' }))

    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the video modal on backdrop click but not on inner clicks', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Watch our intro video' }))
    const dialog = screen.getByRole('dialog', { name: 'Intro video' })

    /* Clicks inside the player container do not close the modal. */
    fireEvent.click(within(dialog).getByTitle('Altruist intro video'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    /* Clicks on the backdrop close it. */
    fireEvent.click(dialog)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('validates the hero donation box and confirms a valid donation', () => {
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))
    expect(screen.getByText('Please enter a donation amount')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Donation amount'), { target: { value: '50' } })
    fireEvent.click(screen.getByRole('button', { name: 'Donate Now' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you! Your one time donation of USD 50 has been received.',
    )
  })
})
