"use client";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("attendance");

  const tabs = ["attendance", "planning", "dpr", "leave", "advance", "material"];

  const renderContent = () => {
    // Attendance
    if (activeTab === "attendance") {
      return (
        <div>
          <h2>📍 Attendance Records</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ background: "#eee" }}>
                <th>Date</th><th>Time</th><th>Location</th><th>Name</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2025-09-16</td><td>09:10 AM</td><td>Site A</td><td>Rajendra Rai</td><td>Present</td></tr>
              <tr><td>2025-09-15</td><td>09:05 AM</td><td>Site B</td><td>Anil Kumar</td><td>Present</td></tr>
              <tr><td>2025-09-14</td><td>09:30 AM</td><td>Site A</td><td>Sohan Lal</td><td>Absent</td></tr>
            </tbody>
          </table>
        </div>
      );
    }

    // Planning
    if (activeTab === "planning") {
      return (
        <div>
          <h2>📝 Planning Records</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ background: "#eee" }}>
                <th>Date</th><th>Planned Work</th><th>Labour</th><th>Tools</th><th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2025-09-17</td><td>Pole Erection at Site A</td><td>12</td><td>Drill Machine</td><td>Work scheduled</td></tr>
              <tr><td>2025-09-16</td><td>Cable Laying at Highway</td><td>8</td><td>Cutter, Ladder</td><td>In Progress</td></tr>
            </tbody>
          </table>
        </div>
      );
    }

    // DPR
    if (activeTab === "dpr") {
      return (
        <div>
          <h2>📊 Daily Progress Report (DPR)</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ background: "#eee" }}>
                <th>Date</th><th>Name</th><th>Labour</th><th>Tools</th><th>Material</th><th>Work</th><th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2025-09-16</td><td>Rajendra Rai</td><td>10</td><td>Drill, Ladder</td><td>Cement, Cable</td><td>Pole erection at Site A</td><td>50% completed</td></tr>
              <tr><td>2025-09-15</td><td>Anil Kumar</td><td>8</td><td>Cutter</td><td>Poles</td><td>Pole shifting at Highway</td><td>Done</td></tr>
            </tbody>
          </table>
        </div>
      );
    }

    // Leave
    if (activeTab === "leave") {
      return (
        <div>
          <h2>📌 Leave Records</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ background: "#eee" }}>
                <th>Date</th><th>Name</th><th>Type</th><th>Reason</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2025-09-12</td><td>Rajendra Rai</td><td>Sick Leave</td><td>Fever</td><td>Approved</td></tr>
              <tr><td>2025-09-10</td><td>Anil Kumar</td><td>Casual Leave</td><td>Family Function</td><td>Pending</td></tr>
              <tr><td>2025-09-08</td><td>Sohan Lal</td><td>Urgent Leave</td><td>Personal Work</td><td>Rejected</td></tr>
            </tbody>
          </table>
        </div>
      );
    }

    // Advance
    if (activeTab === "advance") {
      return (
        <div>
          <h2>💰 Advance Payment Records</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ background: "#eee" }}>
                <th>Date</th><th>Name</th><th>Amount</th><th>Mode</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2025-09-14</td><td>Supplier A</td><td>₹5,000</td><td>UPI</td><td>Approved</td></tr>
              <tr><td>2025-09-12</td><td>Worker B</td><td>₹2,000</td><td>Cash</td><td>Pending</td></tr>
              <tr><td>2025-09-10</td><td>Vendor C</td><td>₹10,000</td><td>Bank Transfer</td><td>Rejected</td></tr>
            </tbody>
          </table>
        </div>
      );
    }

    // Material
    if (activeTab === "material") {
      return (
        <div>
          <h2>📦 Material Management Records</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ background: "#eee" }}>
                <th>Material</th><th>Unit</th><th>Quantity</th><th>Added By</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Cement</td><td>Bags</td><td>50</td><td>Admin</td><td>2025-09-15</td></tr>
              <tr><td>Cable</td><td>Meters</td><td>200</td><td>Data Entry Staff</td><td>2025-09-14</td></tr>
              <tr><td>Poles</td><td>Pieces</td><td>15</td><td>Supervisor</td><td>2025-09-13</td></tr>
            </tbody>
          </table>
        </div>
      );
    }

    return <p>Select a tab to view details.</p>;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src="/logo.png" alt="Firm Logo" width="80" height="80" />
        <h1>Shri Girraj Enterprises</h1>
      </div>

      {/* Tabs */}
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              marginRight: 10,
              padding: "10px 20px",
              borderRadius: "6px",
              border: activeTab === tab ? "2px solid blue" : "1px solid gray",
              background: activeTab === tab ? "blue" : "white",
              color: activeTab === tab ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: "8px", background: "#f9f9f9" }}>
        {renderContent()}
      </div>
    </div>
  );
}