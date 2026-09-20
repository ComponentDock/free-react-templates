import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Learn From The Expert')).toBeInTheDocument()
    expect(screen.getByText('Admission Now')).toBeInTheDocument()
  })

  it('renders sign up form', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Re-type Password')).toBeInTheDocument()
    expect(screen.getByText('Sign up')).toBeInTheDocument()
  })

  it('submits sign up form', async () => {
    render(<Hero />)
    const form = document.querySelector('form')!
    const submitSpy = vi.fn((e: Event) => e.preventDefault())
    form.addEventListener('submit', submitSpy)
    await userEvent.click(screen.getByText('Sign up'))
    expect(submitSpy).toHaveBeenCalled()
  })
})
