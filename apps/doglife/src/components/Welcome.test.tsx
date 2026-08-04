import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('shows the welcome heading, copy, image, and a Read More button', () => {
    const { container } = render(<Welcome />)

    expect(screen.getByRole('heading', { name: 'Welcome To Our Website' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#services')

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/doglife-welcome/)
  })
})
