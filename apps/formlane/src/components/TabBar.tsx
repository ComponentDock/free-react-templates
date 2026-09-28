interface TabBarProps {
  activeTab: 'signup' | 'signin'
  onTabChange: (tab: 'signup' | 'signin') => void
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="mb-6 flex border-b border-white/20">
      <button
        type="button"
        onClick={() => onTabChange('signup')}
        className={`flex-1 pb-3 text-[28px] font-bold transition-colors ${
          activeTab === 'signup'
            ? 'border-b-[3px] border-tab-active text-white'
            : 'border-b-[3px] border-transparent text-tab-inactive'
        }`}
      >
        Sign Up
      </button>
      <button
        type="button"
        onClick={() => onTabChange('signin')}
        className={`flex-1 pb-3 text-[28px] font-bold transition-colors ${
          activeTab === 'signin'
            ? 'border-b-[3px] border-tab-active text-white'
            : 'border-b-[3px] border-transparent text-tab-inactive'
        }`}
      >
        Sign In
      </button>
    </div>
  )
}
