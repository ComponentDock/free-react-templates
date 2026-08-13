import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { topBar } from '../data'

describe('TopBar', () => {
  it('shows contact info on the left and account/language controls on the right', () => {
    const { container } = render(<TopBar />)
    expect(screen.getByRole('link', { name: topBar.phone })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: topBar.email })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: topBar.login })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: new RegExp(topBar.language) })).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
