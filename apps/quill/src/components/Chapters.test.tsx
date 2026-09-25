import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Chapters } from './Chapters'

describe('Chapters', () => {
  it('renders all chapter titles and default content', () => {
    render(<Chapters />)
    expect(screen.getByRole('heading', { name: "What's Inside The Book" })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Title Page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Copyright' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Table of Contents' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dedication' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Foreword' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Prologue' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Epilogue' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Epigraph' })).toBeInTheDocument()
    // Default active chapter content
    expect(screen.getByRole('heading', { name: 'Title Page', level: 3 })).toBeInTheDocument()
  })

  it('switches chapter when a nav button is clicked', async () => {
    const user = userEvent.setup()
    render(<Chapters />)
    await user.click(screen.getByRole('button', { name: 'Prologue' }))
    expect(screen.getByRole('heading', { name: 'Prologue', level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Prologue' })).toHaveAttribute('aria-current', 'page')
  })

  it('has proper aria-label', () => {
    render(<Chapters />)
    expect(screen.getByRole('region', { name: 'Book chapters' })).toBeInTheDocument()
  })
})
