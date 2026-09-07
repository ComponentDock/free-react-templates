import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RoomTypeStep } from './RoomTypeStep'
import { INITIAL_DATA } from '../types'

describe('RoomTypeStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    onChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the heading', () => {
    render(<RoomTypeStep {...defaultProps} />)
    expect(screen.getByText('What type of room would you want?')).toBeInTheDocument()
  })

  it('renders all three room type options', () => {
    render(<RoomTypeStep {...defaultProps} />)
    expect(screen.getByLabelText('Single room')).toBeInTheDocument()
    expect(screen.getByLabelText('Family room')).toBeInTheDocument()
    expect(screen.getByLabelText('Business room')).toBeInTheDocument()
  })

  it('pre-selects Business room by default', () => {
    render(<RoomTypeStep {...defaultProps} />)
    expect(screen.getByLabelText('Business room')).toBeChecked()
    expect(screen.getByLabelText('Single room')).not.toBeChecked()
    expect(screen.getByLabelText('Family room')).not.toBeChecked()
  })

  it('calls onChange when Single room is selected', async () => {
    const user = userEvent.setup()
    render(<RoomTypeStep {...defaultProps} />)
    await user.click(screen.getByLabelText('Single room'))
    expect(defaultProps.onChange).toHaveBeenCalledWith('roomType', 'single')
  })

  it('calls onChange when Family room is selected', async () => {
    const user = userEvent.setup()
    render(<RoomTypeStep {...defaultProps} />)
    await user.click(screen.getByLabelText('Family room'))
    expect(defaultProps.onChange).toHaveBeenCalledWith('roomType', 'family')
  })

  it('shows selected state for active radio', () => {
    render(<RoomTypeStep {...defaultProps} data={{ ...INITIAL_DATA, roomType: 'single' }} />)
    expect(screen.getByLabelText('Single room')).toBeChecked()
  })
})
