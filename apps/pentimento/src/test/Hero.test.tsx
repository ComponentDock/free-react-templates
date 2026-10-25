import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from '../components/Hero'
import { installMedia } from './helpers'

describe('Hero', () => {
  it('states the promise in the h1 and keeps the accessible name still', () => {
    installMedia({ reduce: false })
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveAccessibleName('Painting the hour before the light goes')
    expect(screen.getByTestId('typewriter')).toHaveTextContent('before the light goes')
    expect(screen.getByTestId('typewriter')).toHaveClass('text-gradient')
    expect(heading.querySelector('br')).not.toBeNull()
  })

  it('badges the studio, leads with the materials and shows one 2:1 photograph', () => {
    installMedia({ reduce: false })
    render(<Hero />)

    expect(screen.getByText('Studio, Refshaleøen · Copenhagen')).toBeInTheDocument()
    expect(screen.getByText(/Oil on linen, worked slowly/)).toBeInTheDocument()

    const image = screen.getByRole('img', { name: 'Paint jars and brushes on a studio table' })
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/pentimento-1/1200/600')
    expect(image).toHaveAttribute('width', '1200')
  })

  it('offers the two band actions plus the film trigger', () => {
    installMedia({ reduce: false })
    render(<Hero />)

    expect(screen.getByRole('link', { name: /View available works/ })).toHaveAttribute(
      'href',
      '#works',
    )
    expect(screen.getByRole('link', { name: 'Read the statement' })).toHaveAttribute(
      'href',
      '#statement',
    )
    expect(screen.getByRole('button', { name: /Watch Demo/ })).toBeInTheDocument()
  })

  it('opens the studio film and gives focus back when it closes', async () => {
    const user = userEvent.setup()
    installMedia({ reduce: false })
    render(<Hero />)

    const trigger = screen.getByRole('button', { name: /Watch Demo/ })
    await user.click(trigger)

    expect(screen.getByRole('dialog', { name: 'Studio film' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close the film' })).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByTestId('video-dialog')).toBeNull()
    expect(trigger).toHaveFocus()
  })

  it('keeps two decorative blobs behind the copy', () => {
    installMedia({ reduce: false })
    const { container } = render(<Hero />)

    expect(container.querySelectorAll('.animate-hero-float')).toHaveLength(1)
    expect(container.querySelectorAll('.animate-hero-float-reverse')).toHaveLength(1)
  })
})
