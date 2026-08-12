import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Guestbook } from './Guestbook'

describe('Guestbook', () => {
  it('renders the section title', () => {
    render(<Guestbook />)
    expect(screen.getByRole('heading', { name: 'Guestbook' })).toBeInTheDocument()
  })

  it('renders two dated quote cards with ratings, avatars, names and locations', () => {
    render(<Guestbook />)
    expect(screen.getAllByText('02 / 02 / 2019')).toHaveLength(2)
    expect(screen.getByText('We loved our stay')).toBeInTheDocument()
    expect(screen.getByText('I will come back again')).toBeInTheDocument()
    expect(screen.getByText('JOHN DOE')).toBeInTheDocument()
    expect(screen.getByText('Maria Smith')).toBeInTheDocument()
    expect(screen.getAllByText('Madrid')).toHaveLength(2)

    expect(screen.getByRole('img', { name: 'JOHN DOE avatar' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Maria Smith avatar' })).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: /star rating/ })).toHaveLength(2)
  })
})
