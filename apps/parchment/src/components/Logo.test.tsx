import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'
import { siteName } from '../data'

describe('Logo', () => {
  it('renders the wordmark as a link', () => {
    render(<Logo />)
    const link = screen.getByRole('link', { name: `${siteName} home` })
    expect(link).toHaveTextContent(siteName)
    expect(link).toHaveAttribute('href', '#')
  })
})
