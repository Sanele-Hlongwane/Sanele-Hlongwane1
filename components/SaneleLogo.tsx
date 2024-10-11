// src/components/SaneleLogo.js

const SaneleLogo = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 150" // Adjusted for wider logo to fit Africa shape
        className="w-64 h-32" // Size of the logo
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#800080", stopOpacity: 1 }} /> {/* Purple */}
            <stop offset="100%" style={{ stopColor: "#C0C0C0", stopOpacity: 1 }} /> {/* Silver */}
          </linearGradient>
        </defs>
        <circle cx="200" cy="75" r="60" fill="url(#grad1)" /> {/* Gradient Circle */}
  
        {/* Africa Shape */}
        <path
          d="M130,50 C140,30 180,30 190,50 C200,70 180,90 170,90 C160,90 140,80 130,70 Z" // Rough shape of Africa
          fill="#000" // Black shape for Africa
          opacity="0.7"
        />
  
        {/* Main Text */}
        <text
          x="50%" // Center the text
          y="55%"
          dominantBaseline="middle" // Vertically center text
          textAnchor="middle" // Horizontally center text
          fontFamily="Arial, sans-serif" // Classic font family
          fontSize="36" // Font size
          fill="#FFFFFF" // White text color for contrast
          fontWeight="bold" // Bold text
        >
          Sanele
        </text>
        
        {/* Subtext with a Tagline */}
        <text
          x="50%"
          y="85%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="20"
          fill="#800080"
          fontStyle="italic"
        >
        </text>
      </svg>
    );
  };
  
  export default SaneleLogo;
  