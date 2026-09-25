import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays the name and role', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Michel.*Smith/i)
    expect(screen.getByText('Key Account Manager')).toBeInTheDocument()
  })

  it('displays personal details', () => {
    render(<Hero />)
    expect(screen.getByText(/Born/i)).toBeInTheDocument()
    expect(screen.getByText(/August 25, 1987/)).toBeInTheDocument()
    expect(screen.getByText(/mysith@mywepage.com/)).toBeInTheDocument()
    expect(screen.getByText(/Married/)).toBeInTheDocument()
  })

  it('has a Download CV button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Download CV/i })).toBeInTheDocument()
  })

  it('renders social media links', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const instagram = screen.getByRole('link', { name: 'Instagram' })
    const linkedin = screen.getByRole('link', { name: 'LinkedIn' })
    const facebook = screen.getByRole('link', { name: 'Facebook' })
    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(instagram).toBeInTheDocument()
    expect(linkedin).toBeInTheDocument()
    expect(facebook).toBeInTheDocument()
    expect(twitter).toBeInTheDocument()
    // Click each to verify they are interactive
    await user.click(instagram)
    await user.click(linkedin)
    await user.click(facebook)
    await user.click(twitter)
  })

  it('renders the profile image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /Profile photo/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum'))
  })
})
