import React, { useState } from 'react';
import { tabData } from '../Data/TabData';

function TabSystem() {
  const [tabValue, setTabValue] = useState(tabData[0]);
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const allData = tabData;

  const handleTabClick = (id) => {
    const selectedTab = tabData.find(tab => tab.id === id);
    setTabValue(selectedTab);
    setActiveTab(id);
  };

  return (
    <div>
      <h1>This is the Tab System Component /// using ID </h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        {allData.map((val) => (
          <ul key={val.id}>
            <div>
              <button
                style={{
                  backgroundColor: activeTab === val.id ? 'yellow' : 'transparent', color:"red"
                }}
                onClick={() => handleTabClick(val.id)}
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
