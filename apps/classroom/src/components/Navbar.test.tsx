import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Classroom')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('Teachers')).toBeInTheDocument()
  })

  it('renders Contact Us CTA', () => {
    render(<Navbar />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('toggles mobile menu and clicks links', async () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const homeLinks = screen.getAllByText('Home')
    await userEvent.click(homeLinks[homeLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('clicks Contact Us in mobile menu', async () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(btn)
    const contactLinks = screen.getAllByText('Contact Us')
    await userEvent.click(contactLinks[contactLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
