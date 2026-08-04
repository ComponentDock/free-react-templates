import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and the four post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Doglife Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'How to make first aid for your dog when in the house' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Choosing the right food for your growing puppy' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Daily walks: the secret to a happy, balanced dog' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Understanding your dog body language' }),
    ).toBeInTheDocument()
  })

  it('shows a date and a Read more button on every post', () => {
    render(<Blog />)

    expect(screen.getAllByText('April 17, 2019')).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(4)
  })
})
