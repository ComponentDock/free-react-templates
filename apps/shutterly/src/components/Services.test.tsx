import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and three photography service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'I do for you' })).toBeInTheDocument()
    expect(screen.getByText('What I can do for your next chapter')).toBeInTheDocument()

    for (const title of ['Event Photography', 'Wedding Photography', 'Family Photography']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('Moments worth keeping')).toBeInTheDocument()
    expect(screen.getByText('Stories told in frames')).toBeInTheDocument()
    expect(screen.getByText('Life, unposed')).toBeInTheDocument()
    expect(screen.getByText(/Concerts, conferences, and celebrations/i)).toBeInTheDocument()
    expect(screen.getByText(/first look to the last dance/i)).toBeInTheDocument()
    expect(screen.getByText(/Relaxed sessions that capture/i)).toBeInTheDocument()
  })
})
