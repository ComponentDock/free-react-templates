import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, sub-paragraph and decorative content', () => {
    render(<Hero />)

    expect(screen.getByText('2500+')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Find Your Dream Job' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Search thousands of opportunities from top companies worldwide/),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Advanced Filters' })).toBeInTheDocument()
  })

  it('renders the search form with keyword, location, category and search button', () => {
    render(<Hero />)

    const form = screen.getByRole('search', { name: 'Job search' })
    expect(form).toBeInTheDocument()

    expect(
      screen.getByRole('textbox', { name: 'Job title, keyword, or company' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'City, state, or remote' })).toBeInTheDocument()

    const select = screen.getByRole('combobox', { name: 'Category' })
    for (const option of [
      'All Categories',
      'Technology',
      'Design',
      'Marketing',
      'Finance',
      'Healthcare',
      'Education',
      'Sales',
      'Engineering',
    ]) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(select).toHaveValue('All Categories')

    expect(screen.getByRole('button', { name: 'Search Jobs' })).toBeInTheDocument()
  })

  it('submits the search form without navigating away', () => {
    render(<Hero />)

    const form = screen.getByRole('search', { name: 'Job search' })
    fireEvent.submit(form)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the trending job links', () => {
    render(<Hero />)

    for (const job of [
      'React Developer',
      'Product Manager',
      'Data Scientist',
      'UX Designer',
      'DevOps Engineer',
      'Marketing Lead',
    ]) {
      expect(screen.getByRole('link', { name: job })).toHaveAttribute('href', '#jobs')
    }
  })
})
