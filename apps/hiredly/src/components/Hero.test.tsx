import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline with the highlighted phrase and the hero image', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Searching for a job?')
    expect(heading.textContent).toContain('best startup')

    const image = screen.getByRole('img', { name: /job seeker/i })
    expect(image).toBeInTheDocument()
  })

  it('provides a keyword input, a location select, and a Search Job button', () => {
    render(<Hero />)

    expect(screen.getByLabelText(/job title or keyword/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search job/i })).toBeInTheDocument()

    const select = screen.getByLabelText(/location/i) as HTMLSelectElement
    expect(select.options).toHaveLength(4)
    expect(select.options[0]?.textContent).toContain('Location BD')
    expect(select.options[3]?.textContent).toContain('Location UK')
  })

  it('shows a success confirmation when the user searches', async () => {
    render(<Hero />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/job title or keyword/i), 'React Engineer')
    await user.selectOptions(screen.getByLabelText(/location/i), 'Location US')
    await user.click(screen.getByRole('button', { name: /search job/i }))

    expect(screen.getByText(/searching for react engineer in location us/i)).toBeInTheDocument()
  })

  it('falls back to all jobs when the keyword is empty', async () => {
    render(<Hero />)
    const user = userEvent.setup()

    await user.click(screen.getByRole('button', { name: /search job/i }))

    expect(screen.getByText(/searching for all available jobs/i)).toBeInTheDocument()
  })

  it('applies the gradient style to the search button', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /search job/i })
    expect(button.className).toContain('btn-gradient')
  })
})
