import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Specials } from './Specials'

describe('Specials', () => {
  it('renders the specials heading, CTA, and dish cards', () => {
    render(<Specials />)
    expect(screen.getByRole('heading', { name: 'Our Specials' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View The Menu' })).toBeInTheDocument()

    for (const name of ['Grilled Salmon', 'Filet Mignon', 'Truffle Risotto']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name })).toBeInTheDocument()
    }
  })

  it('displays prices', () => {
    render(<Specials />)
    expect(screen.getByText('$45')).toBeInTheDocument()
    expect(screen.getByText('$55')).toBeInTheDocument()
    expect(screen.getByText('$40')).toBeInTheDocument()
  })
})
