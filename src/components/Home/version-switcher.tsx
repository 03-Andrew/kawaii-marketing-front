import { useState } from "react"

interface VersionSwitcherProps {
  versions: string[]
  defaultVersion: string
}

export default function VersionSwitcher({ versions, defaultVersion }: VersionSwitcherProps) {
  const [selectedVersion, setSelectedVersion] = useState(defaultVersion)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full max-w-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
      >
        <span>{selectedVersion}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {versions.map((version) => (
            <button
              key={version}
              onClick={() => {
                setSelectedVersion(version)
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                version === selectedVersion ? "bg-gray-50" : ""
              }`}
            >
              {version}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

