import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Whitepaper } from './Whitepaper'

describe('Whitepaper', () => {
  it('shows download heading and language cards', () => {
    render(<Whitepaper />)
    expect(screen.getByRole('heading', { name: 'Download Documentation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'English' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Spanish' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Russian' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Arabic' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Portuguese' })).toBeInTheDocument()
  })
})
