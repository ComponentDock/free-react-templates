import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('renders the Happy Customer heading with a quote', () => {
    render(<Testimony />)
    expect(screen.getByRole('heading', { level: 2, name: /happy customer/i })).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toHaveTextContent(/far far away/i)
    expect(screen.getByText('Jeff Nucci')).toBeInTheDocument()
  })
})
