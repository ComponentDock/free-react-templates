import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Showcase } from './Showcase'

describe('Showcase', () => {
  it('renders the first showcase slide with photo, title, blurb, and Read more link', () => {
    render(<Showcase />)

    expect(screen.getByRole('heading', { level: 3, name: 'Easy to Build' })).toBeInTheDocument()
    expect(screen.getByText(/sed do eiusmod tempor incididunt/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read more' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Easy to Build showcase' })).toBeInTheDocument()
  })

  it('navigates between the showcase slides with the arrows', async () => {
    const user = userEvent.setup()
    render(<Showcase />)

    await user.click(screen.getByRole('button', { name: 'Next showcase slide' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Easy to Use' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous showcase slide' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Easy to Build' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to showcase slide 2' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Easy to Use' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to showcase slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
