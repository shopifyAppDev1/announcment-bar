import { useState } from "react";
import Dashobard from "~/components/pages/Dashboard";

import "../style/IndexPages.css"; // Add your custom CSS
import SmartAnnoucement from '~/components/pages/SmartAnnoucement';

export default function DashboardLayout() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { label: "Dashboard", component: <Dashobard /> },
    { label: " Smart Annoucement", component: <SmartAnnoucement /> },
    { label: "Templates", component: <Templates /> },
    { label: "Popups", component: <Popups /> },
    { label: "Smart Bars", component: <SmartBars /> },
    { label: "Subscribers", component: <Subscribers /> },
    { label: "Emails", component: <Emails /> },
  ];

  return (
    <div className="dashboard-container">
      {/* This is my Dashobard Side bar  */}
      <aside className="sidebar">
        <nav>
          <ul>
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={selectedTab === index ? "active" : ""}
                onClick={() => setSelectedTab(index)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div style={{width:'100%', }}>
        {/*  This is my  Top bar Banner abbove the main contents */}
        <div style={{ backgroundColor: "white" , padding:'20px' }}>
          <h1>My Compain bar here </h1>
        </div>

        {/* This is Content Children */}
        <main className="content-area">{tabs[selectedTab].component}</main>
      </div>
    </div>
  );
}


function Templates() {
  return <div>Templates Content</div>;
}

function Popups() {
  return <div>Popups Content</div>;
}

function SmartBars() {
  return <div>Smart Bars Content</div>;
}

function Subscribers() {
  return <div>Subscribers Content</div>;
}

function Emails() {
  return <div>Emails Content</div>;
}
