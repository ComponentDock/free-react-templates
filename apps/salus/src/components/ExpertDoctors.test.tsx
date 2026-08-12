import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ExpertDoctors } from './ExpertDoctors'
import { doctors } from '../data'

describe('ExpertDoctors', () => {
  it('renders the title and the first four doctors', () => {
    render(<ExpertDoctors />)

    expect(screen.getByRole('heading', { name: 'Expert Doctors' })).toBeInTheDocument()
    expect(screen.getByText(doctors[0].name)).toBeInTheDocument()
    expect(screen.getByText(doctors[1].name)).toBeInTheDocument()
    expect(screen.getByText(doctors[2].name)).toBeInTheDocument()
    expect(screen.getByText(doctors[3].name)).toBeInTheDocument()
    expect(screen.queryByText(doctors[4].name)).not.toBeInTheDocument()
  })

  it('advances and goes back through the doctor list', async () => {
    const user = userEvent.setup()
    render(<ExpertDoctors />)

    const next = screen.getByRole('button', { name: 'Next doctors' })
    const prev = screen.getByRole('button', { name: 'Previous doctors' })

    expect(prev).toBeDisabled()

    await user.click(next)
    expect(screen.getByText(doctors[4].name)).toBeInTheDocument()
    expect(screen.queryByText(doctors[0].name)).not.toBeInTheDocument()

    await user.click(next)
    expect(screen.getByText(doctors[5].name)).toBeInTheDocument()
    expect(next).toBeDisabled()

    await user.click(prev)
    expect(screen.getByText(doctors[4].name)).toBeInTheDocument()

    await user.click(prev)
    expect(screen.getByText(doctors[0].name)).toBeInTheDocument()
    expect(prev).toBeDisabled()
  })
})
