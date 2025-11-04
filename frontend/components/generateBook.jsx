'use client';
import React, { useState } from 'react';

const colorPalettes = [
  { id: 'warm', name: 'Warm Tones', colors: ['#D3B86A', '#E8D9B0', '#C4A45F', '#F5EBD4'] },
  { id: 'cool', name: 'Cool Tones', colors: ['#6B8EAF', '#B0C4DE', '#4A708B', '#E6F2FF'] },
  { id: 'earthy', name: 'Earthy Tones', colors: ['#8FBC8F', '#DEB887', '#CD853F', '#F5F5DC'] },
  { id: 'vibrant', name: 'Vibrant Tones', colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F68'] }
];

const GenerateBook = ({ onClose }) => {
  // State for all form fields
 const [formData, setFormData] = useState({
  toneOfVoice: 'calm-soulful',
  bookDimensions: '8x10',
  typography: 'serif',
  coloring: 'warm',
  wordCount: 5000,
  template: 'adventure',
  storyline: '',
  fontColor: colorPalettes[0].colors[0],
  bgColor: colorPalettes[0].colors[0],
});

  const [isModalOpen, setIsModalOpen] = useState(null); // 'font' | 'background' | null
const [selectedFontColor, setSelectedFontColor] = useState(colorPalettes[0].colors[0]);
const [selectedBgColor, setSelectedBgColor] = useState(colorPalettes[0].colors[0]);

  const [selectedPalette, setSelectedPalette] = useState(colorPalettes[0]);



  // Options for dropdowns
  const toneOptions = [
    { value: 'calm-soulful', label: 'Calm & Soulful', description: 'A calm, soulful narrator who writes as if they\'re gently walking beside you and your dog\'s life story.' },
    { value: 'playful', label: 'Playful & Energetic', description: 'Full of energy and excitement, perfect for adventurous pets.' },
    { value: 'elegant', label: 'Elegant & Refined', description: 'Sophisticated and graceful storytelling.' },
    { value: 'humorous', label: 'Humorous & Witty', description: 'Light-hearted and funny anecdotes.' }
  ];

  const dimensionOptions = [
    { value: '8x10', label: '8" x 10" - Standard' },
    { value: '8.5x11', label: '8.5" x 11" - Large' },
    { value: '6x9', label: '6" x 9" - Compact' },
    { value: '12x12', label: '12" x 12" - Square' }
  ];

  const typographyOptions = [
    { value: 'serif', label: 'Serif - Classic' },
    { value: 'sans-serif', label: 'Sans Serif - Modern' },
    { value: 'script', label: 'Script - Elegant' },
    { value: 'monospace', label: 'Monospace - Unique' }
  ];

  const templateOptions = [
    { value: 'adventure', label: 'Adventure Story' },
    { value: 'chronological', label: 'Chronological Journey' },
    { value: 'themed', label: 'Themed Chapters' },
    { value: 'memory', label: 'Memory Lane' },
    { value: 'custom', label: 'Custom Template' }
  ];
  // Handle form changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // keep selectedPalette in sync when coloring changes
    if (field === 'coloring') {
      const found = colorPalettes.find(p => p.id === value);
      if (found) setSelectedPalette(found);
    }
  };


  // Handle form submission
  const handleGenerateBook = (e) => {
    e.preventDefault();
    console.log('Generating book with:', formData);
    // Here you would typically make an API call to generate the book
    alert('Book generation started! This may take a few minutes.');
  };

  // Get current tone description
  const getCurrentToneDescription = () => {
    const currentTone = toneOptions.find(tone => tone.value === formData.toneOfVoice);
    return currentTone ? currentTone.description : '';
  };

  return (
      <div className='bg-[#1a1a1a] rounded-lg max-w-[1192px] max-h-[1090px] h-fit'>
        <div className='flex flex-col text-white px-[24px] py-[24px] gap-[16px]'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <p className='text-white text-xl md:text-2xl font-semibold flex items-center gap-4'>
              <button 
                onClick={onClose} 
                className="hover:opacity-70 transition-opacity flex-shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className='size-6' viewBox="0 0 24 24" fill="none">
                  <path d="M9.31795 8.25736C9.02506 7.96447 8.55018 7.96447 8.25729 8.25736C7.9644 8.55025 7.9644 9.02513 8.25729 9.31802L10.9393 12L8.25729 14.682C7.9644 14.9749 7.9644 15.4497 8.25729 15.7426C8.55018 16.0355 9.02506 16.0355 9.31795 15.7426L11.9999 13.0607L14.6819 15.7426C14.9748 16.0355 15.4497 16.0355 15.7426 15.7426C16.0355 15.4497 16.0355 14.9749 15.7426 14.682L13.0606 12L15.7426 9.31802C16.0355 9.02513 16.0355 8.55025 15.7426 8.25736C15.4497 7.96447 14.9748 7.96447 14.6819 8.25736L11.9999 10.9393L9.31795 8.25736Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z" fill="white" />
                </svg>
              </button>
              Generate Book
            </p>
          </div>

          <form onSubmit={handleGenerateBook} className="flex flex-col lg:flex-row gap-6 md:gap-8 max-h-[871px]">
            {/* Left Column - Settings */}
            <div className='w-[568px] flex flex-col  h-full gap-[20px]'>
              {/* Tone of Voice */}
              <div className='max-h-[315px]  p-[20px] gap-[20px] rounded-lg bg-black'>
                <label className='block text-lg font-medium mb-3'>   <svg className='size-[24px] inline mr-[4px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0011 14.0855C13.424 14.0855 14.5725 12.9369 14.5725 11.5141V6.37123C14.5725 4.94837 13.424 3.7998 12.0011 3.7998C10.5782 3.7998 9.42969 4.94837 9.42969 6.37123V11.5141C9.42969 12.9369 10.5782 14.0855 12.0011 14.0855Z" fill="#D3B86A"  />
                <path d="M16.5429 11.5137H18C18 14.4365 15.6686 16.8537 12.8571 17.2737V20.0851H11.1429V17.2737C8.33143 16.8537 6 14.4365 6 11.5137H7.45714C7.45714 14.0851 9.63429 15.8851 12 15.8851C14.3657 15.8851 16.5429 14.0851 16.5429 11.5137Z" fill="#D3B86A"  />
              </svg> Tone of Voice</label>
                <select 
                  value={formData.toneOfVoice}
                  onChange={(e) => handleInputChange('toneOfVoice', e.target.value)}
                  className='w-full bg-[#3a3a3a] border border-[#4a4a4a] rounded px-3 py-2 text-white focus:outline-none focus:border-[#D3B86A] transition-colors'
                >
                  {toneOptions.map(tone => (
                    <option key={tone.value} value={tone.value}>
                      {tone.label}
                    </option>
                  ))}
                </select>
                <div className='mt-3 p-3 bg-black rounded text-sm text-gray-300'>
                  <p className='font-medium mb-1'>Description:</p>
                  <p>{getCurrentToneDescription()}</p>
                  {formData.toneOfVoice === 'calm-soulful' && (
                    <p className='mt-2 italic'>
                      &quot;From the moment she curled up in your lap to her first joyful run in the snow, Bella&apos;s story unfolded like a melody you both knew by heart…&quot;
                    </p>
                  )}
                </div>
              </div>

              {/* Book Dimensions */}
              <div className='bg-black p-4 rounded-lg'>
                
                <label className='block text-lg font-medium mb-3'> <svg className='size-[24px] inline mr-[4px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 17.7999H7.52634L6 15.9052H7.26316V7.69464H6L7.52634 5.79991H6.00003V4.85254H9.7895V5.79991H8.2632L9.78947 7.69464H8.52632V15.9052H9.78947L8.26317 17.7999H9.78947V18.7473H6V17.7999ZM11.0526 4.85254H18V18.7473H11.0526V4.85254ZM16.7368 6.1157H12.3158V17.4841H16.7368V6.1157Z" fill="#D3B86A"/>
</svg>
Book Dimensions</label>
                <select 
                  value={formData.bookDimensions}
                  onChange={(e) => handleInputChange('bookDimensions', e.target.value)}
                  className='w-full bg-[#3a3a3a] border border-[#4a4a4a] rounded px-3 py-2 text-white focus:outline-none focus:border-[#D3B86A] transition-colors'
                >
                  {dimensionOptions.map(dim => (
                    <option key={dim.value} value={dim.value}>
                      {dim.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Typography */}
              <div className='bg-black p-4 rounded-lg'>
                <label className='block text-lg font-medium mb-3'>
                  <svg className='size-[24px] inline mr-[4px]'viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.67784 12.3L10.0362 16.0541C10.0925 16.2101 10.2085 16.3372 10.3586 16.4076C10.5087 16.478 10.6807 16.4859 10.8366 16.4296C10.9925 16.3732 11.1197 16.2572 11.1901 16.1071C11.2605 15.957 11.2684 15.7851 11.212 15.6291L6.97867 3.93748C6.89317 3.70224 6.73735 3.49902 6.53235 3.35541C6.32736 3.2118 6.08313 3.13477 5.83284 3.13477C5.58254 3.13477 5.33832 3.2118 5.13332 3.35541C4.92833 3.49902 4.7725 3.70224 4.687 3.93748L0.453669 15.6291C0.423035 15.7069 0.408302 15.79 0.410343 15.8735C0.412383 15.9571 0.431155 16.0394 0.465549 16.1155C0.499943 16.1917 0.54926 16.2602 0.610583 16.3169C0.671906 16.3737 0.74399 16.4176 0.822571 16.446C0.901153 16.4744 0.984636 16.4868 1.06808 16.4824C1.15153 16.478 1.23325 16.4569 1.3084 16.4204C1.38356 16.3838 1.45062 16.3326 1.50563 16.2697C1.56064 16.2068 1.60248 16.1335 1.62867 16.0541L2.98784 12.3H8.67784ZM8.2245 11.05L5.83284 4.44331L3.44117 11.05H8.2245ZM12.4545 8.05165C13.2153 6.64915 14.707 6.21415 16.0245 6.21415C16.897 6.21415 17.7612 6.47415 18.4228 6.95165C19.0903 7.43248 19.5828 8.16415 19.5828 9.07498V15.8416C19.5828 16.0074 19.517 16.1664 19.3998 16.2836C19.2826 16.4008 19.1236 16.4666 18.9578 16.4666C18.7921 16.4666 18.6331 16.4008 18.5159 16.2836C18.3987 16.1664 18.3328 16.0074 18.3328 15.8416V15.7916C18.3207 15.7987 18.3084 15.8056 18.2962 15.8125C17.552 16.2458 16.5495 16.4666 15.4203 16.4666C14.5445 16.4666 13.7137 16.2041 13.0912 15.6766C12.4578 15.1408 12.077 14.3616 12.077 13.425C12.077 12.6591 12.3678 11.8741 13.0503 11.2891C13.7253 10.7108 14.717 10.3833 16.0245 10.3833H18.3328V9.07498C18.3328 8.65581 18.1137 8.26915 17.692 7.96498C17.2645 7.65665 16.6628 7.46498 16.0245 7.46498C14.9253 7.46498 14.0003 7.82331 13.5528 8.64831C13.4728 8.79224 13.3392 8.89876 13.181 8.94472C13.0229 8.99068 12.853 8.97236 12.7083 8.89374C12.5636 8.81513 12.4557 8.68257 12.4082 8.52488C12.3607 8.3672 12.3773 8.19713 12.4545 8.05165ZM18.3328 11.6333H16.0245C14.9153 11.6333 14.2462 11.9108 13.8637 12.2383C13.6917 12.3838 13.5543 12.5658 13.4615 12.7711C13.3686 12.9764 13.3227 13.1997 13.327 13.425C13.327 13.9991 13.5495 14.4275 13.8987 14.7225C14.257 15.0266 14.7862 15.2166 15.4203 15.2166C16.4062 15.2166 17.172 15.0208 17.6678 14.7325C18.1528 14.4491 18.3328 14.1158 18.3328 13.7875V11.6333Z" fill="#D3B86A"/>
</svg>
Typography</label>
                <select 
                  value={formData.typography}
                  onChange={(e) => handleInputChange('typography', e.target.value)}
                  className='w-full bg-[#3a3a3a] border border-[#4a4a4a] rounded px-3 py-2 text-white focus:outline-none focus:border-[#D3B86A] transition-colors'
                >
                  {typographyOptions.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
               {/* Coloring */}
{/* Coloring */}
<div className="bg-black p-4 rounded-lg">
  <label className="block text-lg font-medium mb-3 text-white"><svg className='size-[24px] inline mr-[4px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1183_1761)">
<path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 10.4233 19.9737 10.8405 19.9226 11.25H10V13.75L13.75 17.5V19.2731C12.592 19.7419 11.3261 20 10 20C4.47715 20 0 15.5229 0 10C0 4.47715 4.47715 0 10 0C15.5229 0 20 4.47715 20 10ZM3.75 11.25C4.44035 11.25 5 10.6904 5 10C5 9.30965 4.44035 8.75 3.75 8.75C3.05965 8.75 2.5 9.30965 2.5 10C2.5 10.6904 3.05965 11.25 3.75 11.25ZM11.25 3.75C11.25 4.44035 10.6904 5 10 5C9.30965 5 8.75 4.44035 8.75 3.75C8.75 3.05965 9.30965 2.5 10 2.5C10.6904 2.5 11.25 3.05965 11.25 3.75ZM6.46421 6.46447C6.95236 5.97632 6.95236 5.18486 6.46421 4.69671C5.97605 4.20856 5.1846 4.20856 4.69645 4.69671C4.20829 5.18486 4.20829 5.97632 4.69645 6.46447C5.1846 6.95264 5.97605 6.95264 6.46421 6.46447ZM15.3035 6.46451C14.8152 6.95267 14.0239 6.95267 13.5356 6.46451C13.0475 5.97636 13.0475 5.1849 13.5356 4.69675C14.0239 4.2086 14.8152 4.2086 15.3035 4.69675C15.7916 5.1849 15.7916 5.97636 15.3035 6.46451ZM6.46432 13.5355C5.97618 13.0474 5.18471 13.0474 4.69656 13.5355C4.2084 14.0236 4.2084 14.8151 4.69656 15.3033C5.18471 15.7914 5.97618 15.7914 6.46432 15.3033C6.95249 14.8151 6.95249 14.0236 6.46432 13.5355Z" fill="#D3B86A"/>
</g>
<defs>
<clipPath id="clip0_1183_1761">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
Coloring</label>

  {/* Two selector blocks: Font + Background */}
  <div className="flex gap-6">
    {/* Font Color */}
    <button
      type="button"
      onClick={() => setIsModalOpen('font')}
      className="w-[106px] h-[162px] rounded-[4px] border border-[#3A3A3A] hover:border-[#D3B86A] transition-all p-[20px] flex flex-col justify-between items-center cursor-pointer"
    >
      <p className="text-sm font-medium text-white text-center">Font</p>
      <div
        className="w-[64px] h-[64px] rounded-[4px] border border-[#3A3A3A]"
        style={{ backgroundColor: formData.fontColor || selectedFontColor }}
      />
      <p className="text-xs text-gray-400">
        {formData.fontColor || selectedFontColor}
      </p>
    </button>

    {/* Background Color */}
    <button
      type="button"
      onClick={() => setIsModalOpen('background')}
      className="w-[106px] h-[162px] rounded-[4px] border border-[#3A3A3A] hover:border-[#D3B86A] transition-all p-[20px] flex flex-col justify-between items-center cursor-pointer"
    >
      <p className="text-sm font-medium text-white text-center">Background</p>
      <div
        className="w-[64px] h-[64px] rounded-[4px] border border-[#3A3A3A]"
        style={{ backgroundColor: formData.bgColor || selectedBgColor }}
      />
      <p className="text-xs text-gray-400">
        {formData.bgColor || selectedBgColor}
      </p>
    </button>
  </div>

  {/* Modal */}
  {isModalOpen && (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] rounded-lg p-6 w-full max-w-[520px]">
        <h2 className="text-lg font-semibold text-white mb-4 text-center">
          Choose {isModalOpen === 'font' ? 'Font' : 'Background'} Color
        </h2>

        {/* Show all palettes */}
        <div className="grid grid-cols-2 gap-4">
          {colorPalettes.map((palette) => (
            <div key={palette.id} className="flex flex-col items-center gap-2">
              <p className="text-sm font-medium text-white">{palette.name}</p>
              <div className="flex gap-2">
                {palette.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      if (isModalOpen === 'font') {
                        handleInputChange('fontColor', color);
                        handleInputChange('fontPalette', palette.id);
                      } else {
                        handleInputChange('bgColor', color);
                        handleInputChange('bgPalette', palette.id);
                      }
                      setIsModalOpen(false);
                    }}
                    className={`w-[40px] h-[40px] rounded-[4px] border ${
                      (isModalOpen === 'font' && formData.fontColor === color) ||
                      (isModalOpen === 'background' && formData.bgColor === color)
                        ? 'border-[#D3B86A] scale-105'
                        : 'border-[#3A3A3A] hover:border-[#D3B86A]'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setIsModalOpen(false)}
            className="flex-1 py-2 rounded bg-[#333] text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}
</div>



            </div>

            {/* Right Column - Story Configuration */}
            <div className='W-[520px] flex flex-col gap-6'>
              <div className='bg-black p-4 rounded-lg'>
                <label className='block text-lg font-medium mb-3'>
                  <svg className='size-[24px] inline mr-[4px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9 18.3378L18.0187 3.84407C17.9155 3.45995 17.6639 3.13257 17.3194 2.9339C16.9748 2.73524 16.5654 2.68157 16.1813 2.7847L13.2844 3.56282L13.1906 3.59095C13.0509 3.40764 12.8708 3.259 12.6643 3.15657C12.4578 3.05414 12.2305 3.00067 12 3.00032H9C8.73609 3.00103 8.47716 3.07224 8.25 3.20657C8.02284 3.07224 7.76391 3.00103 7.5 3.00032H4.5C4.10218 3.00032 3.72064 3.15836 3.43934 3.43966C3.15804 3.72096 3 4.1025 3 4.50032V19.5003C3 19.8981 3.15804 20.2797 3.43934 20.561C3.72064 20.8423 4.10218 21.0003 4.5 21.0003H7.5C7.76391 20.9996 8.02284 20.9284 8.25 20.7941C8.47716 20.9284 8.73609 20.9996 9 21.0003H12C12.3978 21.0003 12.7794 20.8423 13.0607 20.561C13.342 20.2797 13.5 19.8981 13.5 19.5003V10.1628L16.1063 19.8847C16.1912 20.2051 16.3798 20.4883 16.6427 20.6901C16.9056 20.892 17.2279 21.001 17.5594 21.0003C17.6888 20.9981 17.8176 20.9824 17.9437 20.9534L20.8406 20.1753C21.2247 20.0721 21.5521 19.8205 21.7508 19.4759C21.9495 19.1313 22.0031 18.722 21.9 18.3378ZM16.5656 4.23782L17.1562 6.40345L14.2594 7.18157L13.6688 5.01595L16.5656 4.23782ZM12 4.50032V15.7503H9V4.50032H12ZM7.5 4.50032V6.75032H4.5V4.50032H7.5ZM12 19.5003H9V17.2503H12V19.5003ZM20.4562 18.7222L17.5594 19.5003L16.9688 17.3253L19.875 16.5472L20.4562 18.7222Z" fill="#D3B86A" />
</svg>
Story Line</label>
                
                {/* Word Count */}
                <div className='mb-2'>
                  <label className='block text-sm font-medium mb-1'>Desired Word Count</label>
                  <div className='flex items-center gap-3'>
                    <input 
                      type="number"
                      placeholder='000'
                      value={formData.wordCount}
                      onChange={(e) => handleInputChange('wordCount', parseInt(e.target.value))}
                      className='w-[480px] h-[43px] rounded-[4px] p-[12px] gap-[8px] bg-[#FFFFFF1A]'
                    />
                  </div>
                </div>

                {/* Template Selection */}
                <div className='mb-2'>
                  <label className='block text-sm font-medium mb-1'>Select Template</label>
                  <select 
                    value={formData.template}
                    onChange={(e) => handleInputChange('template', e.target.value)}
                    className='w-full bg-[#3a3a3a] border border-[#4a4a4a] rounded px-3 py-2 text-white focus:outline-none focus:border-[#D3B86A] transition-colors'
                  >
                    {templateOptions.map(template => (
                      <option key={template.value} value={template.value}>
                        {template.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Storyline Input */}
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Create your own storyline
                  </label>
                  <p className='text-sm text-gray-400 mb-3'>
                    Provide information on which HUB elements the book should include.
                  </p>
                  <textarea 
                    value={formData.storyline}
                    onChange={(e) => handleInputChange('storyline', e.target.value)}
                    placeholder='"Write the story of my trip to Hawaii with my dog in a creative way... that shares about all of the loving sweet moments I had with him with photos."'
                    rows={6}
                    className='w-full bg-[#3a3a3a] border border-[#4a4a4a] rounded px-3 py-3 text-white focus:outline-none focus:border-[#D3B86A] transition-colors resize-none h-[536px]'
                  />
                </div>
              </div>

              {/* Generate Button */}
              <div className='right-0 w-[480px] h-full'>
              <button 
                type="submit"
                className='bg-[#D3B86A] hover:bg-[#c0a75f] text-black font-semibold w-[241px] py-3 px-6 rounded-lg transition-colors flex items-end justify-center gap-2 mt-auto'
              >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 2.5V15C16.875 15.1658 16.8092 15.3247 16.6919 15.4419C16.5747 15.5592 16.4158 15.625 16.25 15.625H5.625C5.29348 15.625 4.97554 15.7567 4.74112 15.9911C4.5067 16.2255 4.375 16.5435 4.375 16.875H15C15.1658 16.875 15.3247 16.9408 15.4419 17.0581C15.5592 17.1753 15.625 17.3342 15.625 17.5C15.625 17.6658 15.5592 17.8247 15.4419 17.9419C15.3247 18.0592 15.1658 18.125 15 18.125H3.75C3.58424 18.125 3.42527 18.0592 3.30806 17.9419C3.19085 17.8247 3.125 17.6658 3.125 17.5V4.375C3.12706 3.71259 3.39111 3.0779 3.85951 2.60951C4.3279 2.14111 4.96259 1.87706 5.625 1.875H16.25C16.4158 1.875 16.5747 1.94085 16.6919 2.05806C16.8092 2.17527 16.875 2.33424 16.875 2.5Z" fill="black"/>
</svg>

                Generate Book
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default GenerateBook;