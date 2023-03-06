import './App.css';
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import CustomerPage from './Pages/CustomerPage';
import QuotationPage from './Pages/QuotationPage';
import InvoicesPage from './Pages/InvoicesPage';

function App() {
  const [activeTab, setActiveTab] = useState("home");

  // Save the active tab in local storage
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  // Retrieve the active tab from local storage on mount
  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  const handleTabClick = (tab) => {
    console.log("Updating active tab:", tab);
    setActiveTab(tab);
  };

  const handleTabClose = (tab) => {
    console.log("Closing tab:", tab);
    // Remove the tab from local storage
    localStorage.removeItem(tab);
    // Set the active tab to the previous tab
    setActiveTab(localStorage.key(localStorage.length - 1));
  };

  const renderPage = () => {
    console.log("Rendering page for active tab:", activeTab);
    if (activeTab === "Customer") {
      return <CustomerPage />;
    } else if (activeTab === "Quotation") {
      return <QuotationPage />;
    } else if (activeTab === "Invoices") {
      return <InvoicesPage />;
    } else {
      return <HomePage />;
    }
  };


  return (
    <div>
      <div className='h-screen fixed w-full'>
        <div className='w-full'>
          <Navbar activeTab={activeTab} onCloseTab={handleTabClose} />
        </div>
        <div className='lg:w-[12%] w-[40%]'>
          <Sidebar onTabClick={handleTabClick} />
        </div>
      </div>
      <div className='pt-10 lg:pl-[180px] md:pl-[150px] pl-[100px] xl:pl-[200px]'>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
