import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the welcome heading, play link, feature image, and four service items', () => {
    render(<Welcome />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Welcome To Chimper An Awward Winning Web Agency',
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Play the welcome video' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Chimper studio team at work' })).toBeInTheDocument()

    for (const service of ['Web Design', 'Branding & Identity', 'Art Direction', 'Copywriting']) {
      expect(screen.getByRole('heading', { level: 3, name: service })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(4)
  })
})
