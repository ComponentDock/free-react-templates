import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProtectYourself } from './ProtectYourself'

describe('ProtectYourself', () => {
  it('renders the heading', () => {
    render(<ProtectYourself />)
    expect(screen.getByText(/how to protect yourself/i)).toBeInTheDocument()
  })

  it('renders the do list', () => {
    render(<ProtectYourself />)
    expect(screen.getByText('You should do')).toBeInTheDocument()
    expect(screen.getByText('Stay at home')).toBeInTheDocument()
    expect(screen.getByText('Wear a mask in public')).toBeInTheDocument()
    expect(screen.getByText('Use hand sanitizer')).toBeInTheDocument()
    expect(screen.getByText('Disinfect your home regularly')).toBeInTheDocument()
    expect(screen.getByText('Wash your hands frequently')).toBeInTheDocument()
  })

  it('renders the avoid list', () => {
    render(<ProtectYourself />)
    expect(screen.getByText('You should avoid')).toBeInTheDocument()
    expect(screen.getByText('Avoid infected people')).toBeInTheDocument()
    expect(screen.getByText('Avoid touching animals')).toBeInTheDocument()
    expect(screen.getByText('Avoid handshaking')).toBeInTheDocument()
    expect(screen.getByText('Avoid contaminated surfaces')).toBeInTheDocument()
    expect(screen.getByText("Don't touch your face")).toBeInTheDocument()
  })
})
