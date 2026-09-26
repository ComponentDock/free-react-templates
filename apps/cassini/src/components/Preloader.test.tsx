import { render, screen, waitFor } from '@testing-library/react'
import Preloader from './Preloader'

describe('Preloader', () => {
  it('renders a loading spinner initially', () => {
    render(<Preloader />)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByLabelText('Loading')).toBeInTheDocument()
  })

  it('hides after timeout', async () => {
    render(<Preloader />)
    await waitFor(
      () => {
        expect(screen.queryByRole('status')).not.toBeInTheDocument()
      },
      { timeout: 3000 },
    )
  })
})
