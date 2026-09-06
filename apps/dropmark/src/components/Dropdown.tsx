import { useState, useRef, useEffect } from 'react'
import { FileText, FileCode, File, PenTool, Box } from 'lucide-react'

interface MenuItem {
  icon: React.ReactNode
  label: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  { icon: <FileCode size={16} />, label: 'Markup HTML', iconColor: '#e44d26' },
  { icon: <File size={16} />, label: 'Photoshop PDF', iconColor: '#31a8ff' },
  { icon: <PenTool size={16} />, label: 'Illustrator AI', iconColor: '#ff9a00' },
  { icon: <Box size={16} />, label: 'Sketch', iconColor: '#fdb300' },
]

interface DropdownProps {
  buttonLabel?: string
}

export function Dropdown({ buttonLabel = 'Filetype' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="flex justify-center px-4">
      <div ref={dropdownRef} className="relative inline-block">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded bg-[#f8f9fa] px-[15px] py-2 text-[15px] transition-colors duration-300 hover:text-dropmark-hover"
          style={{
            color: isOpen ? '#fff' : '#888',
            backgroundColor: isOpen ? '#007bff' : '#f8f9fa',
          }}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <FileText size={16} />
          {buttonLabel}
          <span className="ml-1 text-[10px]">&#9662;</span>
        </button>

        {isOpen && (
          <div className="absolute left-0 z-10 mt-[20px] w-[200px] bg-white opacity-100 shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] transition-all duration-300">
            {menuItems.map((item, i) => (
              <div
                key={item.label}
                className={`group relative cursor-pointer overflow-hidden py-[10px] pl-[15px] pr-[15px] transition-all duration-300 hover:pl-[20px] ${
                  i < menuItems.length - 1 ? 'border-b border-[#efefef]' : ''
                }`}
              >
                <div className="absolute left-0 top-0 h-full w-0 bg-[#007bff] transition-all duration-300 group-hover:w-[6px]" />
                <div className="relative flex items-center gap-2 text-[14px] text-[#888] transition-colors duration-300 group-hover:text-[#000]">
                  <span style={{ color: item.iconColor }}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
