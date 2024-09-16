import React, { useState } from 'react';

function Translator() {
  const [fruitName, setFruitName] = useState('');
  const [hindiName, setHindiName] = useState('');

  const fruitHindiMap = {
    'apple': 'सेब',
    'banana': 'केला',
    'orange': 'संतरा',
    'mango': 'आम',
    'grape': 'अंगूर',
    'strawberry': 'स्ट्रॉबेरी',
    'watermelon': 'तरबूज',
    'pineapple': 'अनानास',
    'peach': 'आड़ू',
    'cherry': 'चेरी',
    'plum': 'आलूबुखारा',
    'kiwi': 'कीवी',
    'papaya': 'पपीता',
    'guava': 'अमरूद',
    'pear': 'नाशपाती',
    'fig': 'अंजीर',
    'pomegranate': 'अनार',
    'blueberry': 'ब्लूबेरी',
    'raspberry': 'रास्पबेरी',
    'blackberry': 'ब्लैकबेरी',
    'cranberry': 'क्रैनबेरी',
    'gooseberry': 'गूसबेरी',
    'elderberry': 'एल्डरबेरी',
    'honeydew': 'हनीड्यू',
    'cantaloupe': 'खरबूजा',
    'honeycrisp apple': 'हनीक्रिस्प सेब',
    'nectarine': 'नेक्टरिन',
    'apricot': 'खुबानी',
    'avocado': 'अवोकाडो',
    'lemon': 'नींबू',
    'lime': 'नींबू',
    'grapefruit': 'चकोतरा',
    'tangerine': 'तन्जेरिन',
    'kumquat': 'कमक्वत',
    'starfruit': 'स्टारफ्रूट',
    'dragon fruit': 'ड्रैगन फ्रूट',
    'jackfruit': 'जैकफ्रूट',
    'mangosteen': 'मैंगोस्टीन',
    'rambutan': 'राम्बूटान',
    'lychee': 'लीची',
    'longan': 'लोंगन',
    'passionfruit': 'पैशनफ्रूट',
    'pummelo': 'पुमेलो',
    'quince': 'क्विंस',
    'soursop': 'सोर्सोप',
    'tamarillo': 'टामरिलो',
    'ugli fruit': 'अग्ली फ्रूट',
    'yuzu': 'युजू',
    'feijoa': 'फीजिया',
    'persimmon': 'पर्सिमन',
    'satsuma': 'सत्सुमा',
    'tangelo': 'टैंगेलो',
    // Add more fruits and their Hindi names here
  };

  const handleInputChange = (event) => {
    setFruitName(event.target.value);
    setHindiName(fruitHindiMap[event.target.value.toLowerCase()] || '');
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Fruit Translator</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="border border-gray-400 px-4 py-2 rounded-md w-full md:w-1/2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter fruit name"
          value={fruitName}
          onChange={handleInputChange}
        />
        {hindiName ? (
          <p className="text-lg font-semibold text-green-600">{hindiName}</p>
        ) : (
          <p className="text-gray-500">Hindi translation will appear here</p>
        )}
      </div>
    </div>
  );
}

export default Translator;