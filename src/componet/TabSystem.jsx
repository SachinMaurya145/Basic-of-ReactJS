import React, { useState } from 'react';
import { tabData } from '../Data/TabData';

function TabSystem() {
  const [tabValue, setTabValue] = useState(tabData[0]);
  const [activeTab, setActiveTab] = useState(0);

  const allData = tabData;

  const handleTabClick = (index) => {
    console.log(" ALL DAT A", index, tabValue  ,activeTab );
    setTabValue(tabData[index]);
    setActiveTab(index);
  };

  return (
    <div>
      <h1>This is the Tab System Component</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        {allData.map((val, index) => (
          <ul key={index}>
            <div>
              <button
                style={{
                  backgroundColor: activeTab === index ? 'yellow' : 'transparent',
                }}
                onClick={() => handleTabClick(index)}
              >
                {val.tab}
              </button>
            </div>
          </ul>
        ))}
      </div>
      <div>
        {tabValue.ans && (
          <div>
            {tabValue.ans}
          </div>
        )}
      </div>
    </div>
  );
}

export default TabSystem;
